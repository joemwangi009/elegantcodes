
'use client';

import Link from 'next/link';

interface BreadcrumbsProps {
  projectTitle: string;
}

export default function Breadcrumbs({ projectTitle }: BreadcrumbsProps) {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-amber-400 transition-colors duration-200 cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-home-line"></i>
                </div>
              </Link>
            </li>
            
            <li className="flex items-center">
              <div className="w-4 h-4 flex items-center justify-center text-slate-500">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </li>
            
            <li>
              <Link
                href="/#portfolio"
                className="text-slate-400 hover:text-amber-400 transition-colors duration-200 font-medium cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
            
            <li className="flex items-center">
              <div className="w-4 h-4 flex items-center justify-center text-slate-500">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </li>
            
            <li>
              <span className="text-amber-400 font-medium" aria-current="page">
                {projectTitle}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
