var iframe = document.createElement('iframe');

iframe.src = "https://www.google.com/maps/d/embed?mid=15H_v72zpab75UOOZukynSEyT4ZMrNnI&ehbc=2E312F&noprof=1&z=10";
iframe.width = "90%";
iframe.height = "600";
iframe.frameBorder = "0";
iframe.allowFullscreen = true;

document.getElementById('map').appendChild(iframe);
