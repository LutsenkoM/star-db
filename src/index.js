// const getResourse = async (url) => {
//   const res = await fetch(url);
//
//   if ( !res.ok ) {
//     throw new Error(`Could not fetch ${url}` + `, recived ${res.status}`);
//   }
//
//   const body = await res.json();
//   return body;
// };
//
// getResourse('https://swapi.co/api/people/1').then((body) => {
//   console.log('body', body);
// }).catch((error) => {
//   console.error('error', error);
// });

class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if ( !res.ok ) {
      throw new Error(`Could not fetch ${url}` + `, recived ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getStarships(id) {
    return this.getResourse(`/starships/${id}/`);
  }

}

const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//   people.forEach((person) => {
//     console.log(person.name);
//   });
//
// });
//
// swapi.getPerson(3).then((person) => {
//     console.log(person.name);
// });

// swapi.getAllPlanets().then((planets) => {
//   planets.forEach((planet) => {
//     console.log(planet.name);
//   });
//
// });

swapi.getStarships(3).then((planet) => {
  console.log(planet.name);
});
