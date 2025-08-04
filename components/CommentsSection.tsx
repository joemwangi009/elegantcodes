'use client';

import { useState } from 'react';

export default function CommentsSection() {
  const [newComment, setNewComment] = useState('');
  const [comments] = useState([
    {
      id: 1,
      author: 'Alex Chen',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20Alex%20Chen%20software%20developer%2C%20clean%20corporate%20profile%20photo%20with%20professional%20business%20attire%2C%20modern%20LinkedIn%20style%20portrait%20with%20neutral%20background&width=40&height=40&seq=commenter-1&orientation=squarish',
      date: '2 hours ago',
      content: 'Great insights on the future of custom software development! The section on AI-powered development tools really resonates with what we\'re seeing in the industry.',
      likes: 8,
      replies: 2
    },
    {
      id: 2,
      author: 'Maria Rodriguez',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20Maria%20Rodriguez%20software%20engineer%2C%20clean%20corporate%20profile%20photo%20with%20professional%20business%20attire%2C%20modern%20LinkedIn%20style%20portrait%20with%20neutral%20background&width=40&height=40&seq=commenter-2&orientation=squarish',
      date: '5 hours ago',
      content: 'The emphasis on security by design is spot-on. Too many projects still treat security as an afterthought. Thanks for highlighting the importance of DevSecOps practices.',
      likes: 12,
      replies: 1
    },
    {
      id: 3,
      author: 'David Park',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20David%20Park%20technology%20lead%2C%20clean%20corporate%20profile%20photo%20with%20professional%20business%20attire%2C%20modern%20LinkedIn%20style%20portrait%20with%20neutral%20background&width=40&height=40&seq=commenter-3&orientation=squarish',
      date: '1 day ago',
      content: 'Low-code platforms are definitely changing the game. However, I think there will always be a need for traditional development for complex, highly customized solutions.',
      likes: 6,
      replies: 0
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    // Handle comment submission here
    setNewComment('');
  };

  return (
    <section id="comments-section" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-8">
          Discussion ({comments.length})
        </h3>

        {/* Comment Form */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-slate-200">
          <h4 className="text-lg font-semibold text-slate-900 mb-4">Join the conversation</h4>
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts on this article..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              rows={4}
              maxLength={500}
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-slate-500">
                {newComment.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white disabled:text-slate-500 px-6 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-start space-x-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="font-semibold text-slate-900">{comment.author}</h5>
                    <span className="text-sm text-slate-500">{comment.date}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {comment.content}
                  </p>
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-amber-600 transition-colors duration-200">
                      <i className="ri-heart-line"></i>
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-amber-600 transition-colors duration-200">
                      <i className="ri-reply-line"></i>
                      <span className="text-sm">Reply</span>
                    </button>
                    {comment.replies > 0 && (
                      <button className="text-sm text-amber-600 hover:text-amber-700 transition-colors duration-200">
                        View {comment.replies} {comment.replies === 1 ? 'reply' : 'replies'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Comments */}
        <div className="text-center mt-8">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
            Load More Comments
          </button>
        </div>
      </div>
    </section>
  );
}