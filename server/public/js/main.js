// Station data
const stations = {
  '1': {
    name: 'Central Hub',
    lines: ['Tozai', 'Namboku'],
    buttons: [
      { label: 'ABOUT', link: '/about' },
      { label: 'MUSIC', link: '/music' },
      { label: 'SHOWS', link: '/shows' },
      { label: 'LINKS', link: '/links' },
    ],
  },
  '2': {
    name: 'Nexus Point',
    lines: ['Tozai', 'Toho'],
    buttons: [
      { label: 'ABOUT', link: '/about' },
      { label: 'MUSIC', link: '/music' },
      { label: 'SHOWS', link: '/shows' },
      { label: 'LINKS', link: '/links' },
    ],
  },
  '3': {
    name: 'Northern Terminal',
    lines: ['JR', 'Namboku'],
    buttons: [
      { label: 'ABOUT', link: '/about' },
      { label: 'MUSIC', link: '/music' },
      { label: 'SHOWS', link: '/shows' },
      { label: 'LINKS', link: '/links' },
    ],
  },
  '4': {
    name: 'Eastern Exchange',
    lines: ['Tozai', 'Streetcar'],
    buttons: [
      { label: 'ABOUT', link: '/about' },
      { label: 'MUSIC', link: '/music' },
      { label: 'SHOWS', link: '/shows' },
      { label: 'LINKS', link: '/links' },
    ],
  },
};
function initializeStations() {
  console.log('Initializing Stations'); // Debug log
  const tooltip = document.createElement('div');
  tooltip.className = 'station-tooltip';
  tooltip.style.opacity = '0';
  document.body.appendChild(tooltip);
  const circles = document.querySelectorAll('.connection-points circle');
  console.log('Found station circles:', circles.length); // Debug log
  circles.forEach((station) => {
    const stationId = station.getAttribute('data-station');
    const stationData = stations[stationId];
    // Add hover effect class
    station.classList.add('interactive-station');
    station.addEventListener('mousemove', (e) => {
      tooltip.style.opacity = '1';
      tooltip.style.left = ${e.pageX}px;
      tooltip.style.top = ${e.pageY - 10}px;
      tooltip.textContent = ${stationData.name}\nLines: ${stationData.lines.join(', ')};
    });
    station.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
    station.addEventListener('click', () => {
      navigateToStation(stationId);
    });
  });
  const mapButtonsData = Object.keys(stations).map((stationId) => ({
    label: stations[stationId].name,
    link: /station/${stationId},
    top: getStationPosition(stationId).top,
    left: getStationPosition(stationId).left,
    buttons: stations[stationId].buttons,
  }));
  const mapOverlay = document.querySelector('.map-overlay');
  if (mapOverlay) {
    ReactDOM.render(
      <OverlaidMapButtons mapSrc="/public/images/DEZ.gif" buttons={mapButtonsData} />,
      mapOverlay
    );
  }
}
function getStationPosition(stationId) {
  const stationPoint = document.querySelector(circle[data-station="${stationId}"]);
  if (stationPoint) {
    const rect = stationPoint.getBoundingClientRect();
    return {
      top: ${(rect.top / window.innerHeight) * 100}%,
      left: ${(rect.left / window.innerWidth) * 100}%,
    };
  }
  return { top: '0', left: '0' };
}
// Add this to your existing script section
document.addEventListener('DOMContentLoaded', () => {
  // Create a container for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.style.position = 'absolute';
  buttonContainer.style.zIndex = '1000';
  buttonContainer.style.top = '100px';  // temporary position
  buttonContainer.style.left = '100px'; // temporary position
  
  // Create buttons for each station
  Object.entries(stations).forEach(([stationId, stationData]) => {
      stationData.buttons.forEach(button => {
          const btn = document.createElement('button');
          btn.textContent = button.label;
          btn.onclick = () => window.location.href = button.link;
          btn.style.display = 'block';
          btn.style.margin = '5px';
          buttonContainer.appendChild(btn);
      });
  });

  // Add the container to the page
  document.querySelector('.navigation-container').appendChild(buttonContainer);
});