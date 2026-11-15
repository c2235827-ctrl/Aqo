import {
  Award,
  Calendar,
  CheckSquare,
  FileText,
  GraduationCap,
  HelpCircle,
  Layers,
  Mic,
  NotebookPen,
  Search,
} from 'lucide-react';

export function TelegramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.5 3.5L2.8 10.7c-.8.3-.8 1.4 0 1.7l4.7 1.6 1.8 5.5c.2.7 1.1.9 1.6.4l2.7-2.6 4.8 3.5c.6.4 1.5.1 1.7-.7L22.5 4.7c.2-.9-.4-1.5-1-1.2z" />
      <path d="M7.5 14l11.2-7.5-7.4 8.7-.4 3.4" />
    </svg>
  );
}

export type FeatureIconType =
  | 'graduationCap'
  | 'mic'
  | 'search'
  | 'fileText'
  | 'notebookPen'
  | 'layers'
  | 'checkSquare'
  | 'calendar'
  | 'helpCircle'
  | 'award';

export function FeatureIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: FeatureIconType;
  className?: string;
}) {
  switch (name) {
    case 'graduationCap':
      return <GraduationCap className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'mic':
      return <Mic className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'search':
      return <Search className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'fileText':
      return <FileText className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'notebookPen':
      return <NotebookPen className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'layers':
      return <Layers className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'checkSquare':
      return <CheckSquare className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'calendar':
      return <Calendar className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'helpCircle':
      return <HelpCircle className={className} strokeWidth={1.75} aria-hidden="true" />;
    case 'award':
      return <Award className={className} strokeWidth={1.75} aria-hidden="true" />;
  }
}
