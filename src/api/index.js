export default class Api {
  constructor(area) {
    this.area = area;
  }

  async callApi(endpoint) {
    const url = `https://sj-weather.herokuapp.com/${endpoint}/${this.area}`;
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return error;
    }
  }

  async getData() {
    try {
      const location = await this.callApi("location");
      const weather = await this.callApi("weather");
      return Promise.all([location, weather]).then(values => {
        const errorObj = {};
        if (values[0].error_code || values[1].cod >= 400) {
          errorObj.error = true;
          errorObj.message = `${values[0].error_msg} ... ${values[1].message}`;
          errorObj.status = `${values[0].error_code} ... ${values[1].cod}`;
        }
        return {
          location: values[0],
          weather: values[1],
          ...errorObj
        };
      });
    } catch (error) {
      console.error("\nERROR", error, "\n");
      return {
        error: true,
        message: "Cannot connect to server. Speak with your administrator.",
        status: "0000"
      };
    }
  }
}
