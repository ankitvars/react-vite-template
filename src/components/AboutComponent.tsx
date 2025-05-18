import React from 'react'
import { Stack } from '@mui/system'
import './AboutComponent.css'

type ContentItem = {
  id: string
  node: React.ReactNode
}

const allItems: ContentItem[] = [
  {
    id: 'heading-en',
    node: (
      <h3>
        <a
          href="https://solsale.app/presale/9NAwkrUE2QZsihBGafG1ozZPyYkHMPQ9d4DwK5XYBF3U?refer=8ogXizBKXnZauAZa89Ac2EtWJJ36vgLpeMhKLUAopHR4"
          style={{ color: '#0CAF60' }}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>
            <em>
              <u>Click Here to BUY </u>
            </em>
          </strong>
        </a>
      </h3>
    ),
  },
  {
    id: 'heading-it',
    node: (
      <h3>
        <a
          href="https://solsale.app/presale/9NAwkrUE2QZsihBGafG1ozZPyYkHMPQ9d4DwK5XYBF3U?refer=8ogXizBKXnZauAZa89Ac2EtWJJ36vgLpeMhKLUAopHR4"
          style={{ color: '#0CAF60' }}
          rel="noopener noreferrer"
          target="_blank"
        >
          <em>
            <u>ACQUISTA QUI</u>
          </em>
        </a>
      </h3>
    ),
  },
  {
    id: 'spacer1',
    node: <p><br /></p>,
  },
  {
    id: 'tokenomics',
    node: (
      <p>
        🔹 Fair &amp; Sustainable Tokenomics – Designed for long-term stability, preventing market manipulation and ensuring investor confidence.
      </p>
    ),
  },
  {
    id: 'spacer2',
    node: <p><br /></p>,
  },
  {
    id: 'sustainability',
    node: (
      <p>
        <span style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
          📢 We believe in long-term sustainability, transparency, and profitability for all investors.
        </span>
      </p>
    ),
  },
  {
    id: 'spacer3',
    node: <p><br /></p>,
  },
  {
    id: 'passive',
    node: (
      <p>
        📊 <strong>Your Key to Passive Income!</strong>
      </p>
    ),
  },
  {
    id: 'system',
    node: (
      <p>
        Global Prosperity operates on a smart transaction fee system, where each trade contributes to Liquidity Pool.
      </p>
    ),
  },
  {
    id: 'spacer4',
    node: <p><br /></p>,
  },
  {
    id: 'fee1',
    node: <p>✅ 1% buy fee – Ensures a sustainable system.</p>,
  },
  {
    id: 'spacer5',
    node: <p><br /></p>,
  },
  {
    id: 'fee2',
    node: (
      <p>
        ✅ 75% of transaction fees – Distributed directly to<strong> Liquidity Pool</strong> in SOL.
      </p>
    ),
  },
  {
    id: 'spacer6',
    node: <p><br /></p>,
  },
  {
    id: 'fee3',
    node: <p>✅ 25% of transaction fees are allocated for development, marketing, and growth.</p>,
  },
  {
    id: 'spacer7',
    node: <p><br /></p>,
  },
  {
    id: 'fee4',
    node: (
      <p>
        ✅ <strong>Liquidity</strong> is <strong>fully burned</strong> – Establishing a deflationary model with long-term value growth.
      </p>
    ),
  },
  {
    id: 'spacer8',
    node: <p><br /></p>,
  },
  {
    id: 'spacer9',
    node: <p><br /></p>,
  },
  {
    id: 'upcoming',
    node: <p>🛠 Upcoming Developments:</p>,
  },
  {
    id: 'spacer10',
    node: <p><br /></p>,
  },
  {
    id: 'up1',
    node: (
      <p>
        <span style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
          🔹 Marketing campaigns – Strategic growth initiatives to boost awareness.
        </span>
      </p>
    ),
  },
  {
    id: 'spacer11',
    node: <p><br /></p>,
  },
  {
    id: 'up2',
    node: (
      <p>
        <span style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
          🔹 CEX listings – Expanding to centralized exchanges for wider adoption.
        </span>
      </p>
    ),
  },
  {
    id: 'spacer12',
    node: <p><br /></p>,
  },
  {
    id: 'up3',
    node: (
      <p>
        <span style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
          🔹 Staking options – Additional ways to earn even more SOL.
        </span>
      </p>
    ),
  },
  {
    id: 'spacer13',
    node: <p><br /></p>,
  },
  {
    id: 'up4',
    node: (
      <p>
        <span style={{ backgroundColor: 'rgba(145, 158, 171, 0.08)' }}>
          🔹 NFT integration – Exclusive NFTs for holders with additional benefits.
        </span>
      </p>
    ),
  },
  {
    id: 'spacer14',
    node: <p><br /></p>,
  },
  {
    id: 'authority',
    node: <h5>All Authority - REMOVED</h5>,
  },
  {
    id: 'spacer15',
    node: <p><br /></p>,
  },
  {
    id: 'cta',
    node: (
      <p>
        <a
          href="https://globalprosperity.pro/"
          style={{ color: '#0CAF60' }}
          rel="noopener noreferrer"
          target="_blank"
        >
          Now is the perfect time to be part of this movement!
        </a>
      </p>
    ),
  },
]

export default function AboutComponent() {
  // split off the first two headings
  const topTwo = allItems.slice(0, 2)
  const rest = allItems.slice(2)

  return (
    <Stack className="about-component" spacing={2}>
      <Stack className="about-component-inner" spacing={2}>
        <Stack className="about-component-inner2" spacing={1}>
          {topTwo.map(item => <React.Fragment key={item.id}>{item.node}</React.Fragment>)}
          {rest.map(item => <React.Fragment key={item.id}>{item.node}</React.Fragment>)}
        </Stack>
      </Stack>
    </Stack>
  )
}
