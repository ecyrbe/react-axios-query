# react-axios-query

Combine the power of react-query and axios.

## install

```bash
yarn add react-axios-query
```

# use

```javascript
import { useAxios } from 'react-axios-query';

type User = {
  name: string;
  phone: string;
  website: string;
}

const Component = (props) => {
  const { 
    isLoading,
    data: {
      data: user
      status
    },
    error,
    isFetching
  } = useAxios<User>({
      method: 'GET',
      url: '/user/1'
    });
  if(isLoading) {
    return 'Loading...';
  }
  if(error) {
    return `Error: ${$error}`;
  }
  return `Status: ${status}, User: ${user}`;
}
```