export const getHoursAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const difference = Math.floor(diffInMs / (1000 * 60 * 60));
  if (difference > 24) {
    return `${Math.floor(difference / 24)} days ago`;
  }
  return `${difference} hours ago`;
};
