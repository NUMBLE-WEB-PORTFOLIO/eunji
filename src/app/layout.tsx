import type { PropsWithChildren } from 'react'

import classNames from 'classnames';
import type { Metadata } from 'next'

import { pretendard } from '@/styles/font';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={classNames(pretendard.className)}>{children}</body>
    </html>
  )
}
