import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { PuppyApplication } from '../types/supabase';
import { CheckCircle, XCircle, Clock, Search, Filter } from 'lucide-react';
import { sendStatusEmail } from '../lib/emailService';

export default function AdminDashboard() {
  const [applications, setApplications] = useState<PuppyApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [updateLoading, setUpdateLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      console.log('Fetching applications...');
      let query = supabase
        .from('puppy_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;
      console.log('Fetched data:', data);
      console.log('Error if any:', error);
      
      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      setUpdateLoading(id);
      console.log('Updating application:', id, 'to status:', status);

      // First, update the status
      const { error: updateError } = await supabase
        .from('puppy_applications')
        .update({ status })
        .eq('id', id);

      if (updateError) {
        console.error('Database update error:', updateError);
        throw updateError;
      }

      // Then fetch the updated record
      const { data: updatedData, error: fetchError } = await supabase
        .from('puppy_applications')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError) {
        console.error('Error fetching updated data:', fetchError);
        throw fetchError;
      }

      if (!updatedData) {
        throw new Error('No data returned after update');
      }

      console.log('Update successful:', updatedData);

      // Update local state immediately
      setApplications(prevApplications => 
        prevApplications.map(app => 
          app.id === id ? { ...app, status } : app
        )
      );

      // Send email notification
      const nextSteps = status === 'approved' 
        ? 'Congratulations! Your application has been approved. Next steps:\n1. Submit your deposit of $1000 within 24 hours to secure your puppy\n2. Contact us at topelitebullies@gmail.com\n3. We\'ll discuss puppy selection and delivery options once deposit is received'
        : 'Unfortunately, your application was not approved at this time. Feel free to contact us if you have any questions.';

      try {
        const emailResult = await sendStatusEmail({
          email: updatedData.email,
          to_name: `${updatedData.first_name} ${updatedData.last_name}`,
          application_status: status,
          next_steps: nextSteps,
          reply_to: updatedData.email
        });
        console.log('Email sent successfully:', emailResult);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails
      }

      // Refresh applications list to ensure we have the latest data
      await fetchApplications();
      
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Failed to update application status. Please try again.');
    } finally {
      setUpdateLoading(null);
    }
  };

  const filteredApplications = applications.filter(app => 
    app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    `${app.first_name} ${app.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">Approved</span>;
      case 'rejected':
        return <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-800">Rejected</span>;
      default:
        return <span className="px-2 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Application Management</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Applications</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading applications...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {application.first_name} {application.last_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{application.email}</div>
                        <div className="text-sm text-gray-500">{application.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(application.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(application.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {application.status === 'pending' && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => updateApplicationStatus(application.id, 'approved')}
                              className="text-green-600 hover:text-green-900"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateApplicationStatus(application.id, 'rejected')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 