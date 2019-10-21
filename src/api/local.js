const host = process.env.VUE_APP_API_URL

const defaultUser = {
  name: "Anoniempje",
  avatar: "./images/avatar.png"
}

export default class {
  async init(name) {
    const user = await  this.getUser(name);
    const users = await this.getUsers();
    const messages = await this.getAllMessages();

    return {
      user,
      users,
      messages
    };
  }

  createUser() {
    return fetch(`${host}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(defaultUser)
    })
    .then(res => res.json())
  }

  async updateUser(user) {
    const { id, name } = user
    await fetch(`${host}/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })

    window.localStorage.setItem('user', JSON.stringify(user))

    return user
  }

  async getUser() {
    let user = JSON.parse(window.localStorage.getItem('user'));

    if (!user) {
      user = await this.createUser()
      if (!user.error) {
        window.localStorage.setItem('user', JSON.stringify(user))
      }
    }
 
    return user;
  }

  getUsers() {
    return fetch(`${host}/users`)
      .then(res => res.json())
  }

  getAllMessages() {
    return fetch(`${host}/messages`)
      .then(res => res.json())
  }

  startStream(callback) {
    setInterval(async () => {
      const [messages, users] = await Promise.all([
        fetch(`${host}/messages`).then(res => res.json()),
        fetch(`${host}/users`).then(res => res.json())
      ])

      console.log(users);
      

      callback({ messages, users})
    }, 1000);
  }

  addMessage(message) {
    return fetch(`${host}/messages`, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json());
  }
}