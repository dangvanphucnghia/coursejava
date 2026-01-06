type Props = { className?: string };

export function GitBranchIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M7 8h7a3 3 0 0 1 3 3v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="7" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="15" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
