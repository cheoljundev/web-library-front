'use client'

import Link from "next/link"
import {Github, LibraryBig, FileText} from "lucide-react";

const links = [
  {href: 'https://devcj.kr/web-library', label: '프로젝트 소개', icon: LibraryBig},
  {href: 'https://github.com/cheoljundev/web-library-front', label: '프론트엔드', icon: Github},
  {href: 'https://github.com/cheoljundev/web-library', label: '백엔드', icon: Github},
  {href: 'https://devcj.kr', label: 'Blog', icon: FileText},
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">온라인 도서관</h3>
            <p className="text-gray-400">언제 어디서나 편리하게 이용하는 도서관 서비스</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">링크</h3>
            <ul className="space-y-2">
              {
                links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} target="_blank" className="text-gray-400 hover:text-white flex items-center gap-x-1">
                      <link.icon className="w-[1em] h-[1em]" /> {link.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <p className="text-gray-400"><a href="mailto:cheoljundev@gmail.com">cheoljundev@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 온라인 도서관. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

