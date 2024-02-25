document.addEventListener('DOMContentLoaded', function () {
  const fundItems = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: null,
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: null,
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: null,
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: null,
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: null,
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: null,
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: null,
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: null,
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: null,
    },
  ];

  const fundList = document.getElementById('fundList');
  const loadMoreButton = document.getElementById('loadMore');
  let currentIndex = 6;

  function addFundItems() {
    for (
      let i = currentIndex;
      i < currentIndex + 3 && i < fundItems.length;
      i++
    ) {
      const listItem = document.createElement('li');
      listItem.textContent = fundItems[i];
      fundList.appendChild(listItem);
    }
    currentIndex += 3;
  }

  addFundItems();

  loadMoreButton.addEventListener('click', function () {
    addFundItems();
  });
});
