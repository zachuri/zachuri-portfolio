import { cn } from '@/lib/utils';
import React from 'react';
import { useFeatureStore } from '../store/feature';

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  gradient,
  children
}) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  return (
    <div
      key={id}
      className={cn(
        'absolute inset-0 h-full w-full bg-red-300 rounded-xl bg-gradient-to-br from-primary to-primary-foreground opacity-0 transition-opacity',
        gradient,
        inViewFeature === id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export default FeatureCard;

export const Todo = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Music = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Availability = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
