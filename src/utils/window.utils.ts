


const openPopup = (url: string) => {
  const width = 500;
  const height = 600;

  // Calculate the position to center the window
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  const features = `width=${width},height=${height},left=${left},top=${top},status=no,menubar=no,toolbar=no`;

  const popup = window.open(url, "AuthWindow", features);

  // Optional: Bring the popup to the front if it's already open
  if (window.focus && popup) popup.focus();
  return popup;
};
const newTab = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};


const Window = {
  newTab,
  openPopup,
}


export default Window;