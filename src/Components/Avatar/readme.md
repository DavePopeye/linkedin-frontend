# AVATAR


## PROPS

- style : style object,
- src : defult src
- roundedCircle boolean
- callback => the function that will be invoked if update successfull


##Example 

```js
 <Avatar
  src={user.image}
  roundedCircle
  callBack={this.props.reFetch}
  updateUrl={`https://linkedinbackend.herokuapp.com/users/${user._id}/photo`}
/>
```
