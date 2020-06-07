const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    return json[json.length - 1];
  },

  async addExercise(data) {
    const id = location.search.split("=")[1];

    try {
      const res = await fetch("/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.status == 422) {
        let message = await res.json()
        console.log(message);
        alert(message);
        return false;
      }
      const json = await res.json();
      return json;
    }
    catch (error) {
      console.log(error);
      alert(error);
      return false;
    }


  },

  async createWorkout(data = {}) {
    try {
      const res = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });

      if (res.status == 422) {
        let message = await res.json()
        console.log(message);
        alert(message);
        return false;
      }
      const json = await res.json();

      return json;
    }
    catch (error) {
      console.log(error);
      alert(error);
      return false;
    }


  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
