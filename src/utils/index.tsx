export const renderTime = (createdAt: string) => {
  const date = new Date(createdAt);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  let html: JSX.Element;
  if (diff < 1000 * 60) {
    html = <p>Vừa xong</p>;
  } else if (diff < 1000 * 60 * 60) {
    html = <p>{Math.floor(diff / (1000 * 60))} phút trước</p>;
  } else if (diff < 1000 * 60 * 60 * 24) {
    html = <p>{Math.floor(diff / (1000 * 60 * 60))} giờ trước</p>;
  } else if (diff < 1000 * 60 * 60 * 24 * 30) {
    html = <p>{Math.floor(diff / (1000 * 60 * 60 * 24))} ngày trước</p>;
  } else
    html = <p>{Math.floor(diff / (1000 * 60 * 60 * 24 * 30))} tháng trước</p>;
  return html;
};
