"use client"

import Image from 'next/image'
import todolist from '@/asset/dev2.webp'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { StyledButton } from '@/component/styledComp/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router= useRouter()
  return (
    <main className={styles.main}>
      <div className={styles.part1}>
        <div className={styles.card}>
          <div>
            <h3 className={styles.h3}>
              Welcome to <br />Todo list .
            </h3>
            <p>
              Our task list enables you to keep all your
              business in one app. Try it now
              for free
            </p> <br />
            <StyledButton click={() => router.push(`/signUp`)}>
              Try now
            </StyledButton>
          </div>
        </div>
      </div>
      <div className={styles.part2}>
        <div>
          <nav className={styles.links}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href='/signUp' className={styles.a}>
                  <p >Sign Up</p>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href='/signIn' className={styles.a}>
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Image
              src={todolist}
              alt="todo list image"
              width={700}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
