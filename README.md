## [Buy My Cookies API](https://buymycookies.netlify.app/)

### API Documentation

`https://buymycookies.herokuapp.com/api`

## Methods

- Users
- Posts
- Authorization

## Endpoints

- Users

1. All users

   example : `https://buymycookies.herokuapp.com/api/users`

2. Specific User

   - By id

     parameter : id = xyz123456789

     example : `https://buymycookies.herokuapp.com/api/users/xyz123456789`

   - By username

     parameter : username = subham_cc99

     example : `https://buymycookies.herokuapp.com/api/users/@/subham_cc99`

- Posts

1. All Posts (GET)

   example : `https://buymycookies.herokuapp.com/api/posts`

2. Specific Post (GET)

   - By id

     parameter : id = 123712b1z9798712

     example : `https://buymycookies.herokuapp.com/api/posts/123712b1z9798712`

3. Adding new Post (POST)

   endpoint : `https://buymycookies.herokuapp.com/api/post/`

   body :

   ```
    {
      "title": "Testing",
      "description": "This is a new test",
      "username": "subham123",
      "city": "Delhi",
      "msp": 200,
      "current_bid": 200,
      "no_of_bids":0,
      "cookies_type": "Oatmeal", //Chocolate, Oatmeal, Vanilla & Nutella
      "egg": true,
      "baked_time": "month ago",
      "bidding_end_date": "2021-12-31",
    }
   ```

- Authetication

1. Login

   endpoint : `https://buymycookies.herokuapp.com/api/auth/login`

   body :

   ```
   {
     "username" : "subham123",
     "password" : "abc123"
   }
   ```

2. Registration

   endpoint : `https://buymycookies.herokuapp.com/api/auth/register`

   body :

   ```
   {
     "full_name" : "Subham Singh",
     "username" : "subham123",
     "email" : "subham@test.com",
     "contact" : "987654321",
     "password" : "subham007",
     "city" : "kolkata",
     "account_type" : "Buyer Only", //Buyer Only, Seller Only & Both
     "name_of_business" : "",
     "gstn" : ""
   }
   ```

#### Made by : [Subham Singh](https://www.linkedin.com/in/subham-singh-cc/)
