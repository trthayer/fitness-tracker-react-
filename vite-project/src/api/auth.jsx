export const registerUser = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            })
          })

        const data = await response.json()
        console.log("This is the user data", data)

        return data
    } catch (error) {
        console.error(error);
    }
};


export const previousUser = async (username, password) => {
    try {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            })
          })

          const { 
            data: { token },
          } = await response.json();

          return token;
    } catch (error) {
        console.error(error)
    }
}; 


export const fetchMe = async (token) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          })

          const { data } = await response.json();
          return data;
    } catch (error) {
        console.error(error)
    }
};