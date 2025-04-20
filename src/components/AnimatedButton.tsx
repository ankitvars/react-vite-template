'use client';

import { Avatar, Button as MUIButton } from '@mui/material';
import mooniIcon from '../assets/logo/GemPoints.svg';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'motion/react';
import { useRef } from 'react';

const AnimatedButton = () => {
  return (
    <div
      className="relative h-14 w-56 overflow-hidden p-[1px] bg-transparent"
      style={{ borderRadius: '1.75rem' }}
    >
      <div className="absolute inset-0" style={{ borderRadius: '1.68rem' }}>
        <MovingBorder duration={3000} rx="30%" ry="30%">
          <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-80" />
        </MovingBorder>
      </div>

      <MUIButton
        fullWidth
        className="relative flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/80 text-white backdrop-blur-xl normal-case text-sm px-4 py-2"
        style={{
          borderRadius: '1.68rem',
          height: '100%',
          zIndex: 10,
          color: 'white',
          textTransform: 'none',
        }}
      >
        <Avatar src={mooniIcon} sx={{ width: 24, height: 24 }} />
        MOONI
      </MUIButton>
    </div>
  );
};

export default AnimatedButton;

const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time: number) => {
    const length = pathRef.current?.getTotalLength?.();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength?.(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength?.(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
