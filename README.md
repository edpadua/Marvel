# Marvel

<h1>
    <a href="https://marvel-blush-kappa.vercel.app/"><img src="https://github.com/edpadua/Marvel/blob/main/marvel/public/marvel-app-capture.gif"></a>
</h1>

# Summary

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [Demo](#demo)
- [License](#license)
- [Contact](#contact)
 
## About

This project is a system developed with the ReactJS library that shows the list of characters from Marvel Comics with data provided by the API "Marvel API". In addition to displaying the complete list of characters, in the navigation bar there is an entry field and button for the user to search for a specific character by name. In addition to this, if the user clicks on details link, it goes to a specific page showing more information of a charater as well as the list comic book where we can find it.

Among the technologies used in this project are the Next.JS framework, Context API, TypeScript, Tailwind CSS with Tailwind Styled-Components, the Axios library to consume the Rest API.

### Screeshot - Home Page

![image](https://github.com/edpadua/Marvel/assets/4975360/0e1418fe-5ef9-4d3c-9dfc-aaf51427153e)

### Screeshot - Character Page

![image](https://github.com/edpadua/Marvel/assets/4975360/402850d7-f073-49c9-916a-307a71b8af25)


### Screeshot - Mobile



### Technologies

- [ReactJS](https://reactjs.org)
- [NextJS](https://nextjs.org/)
- [Tailwind Styled-Components](https://www.npmjs.com/package/tailwind-styled-components)
- [axios](https://www.npmjs.com/package/axios)
- [Tailwind CSS](https://tailwindcss.com/)
- [Marvel API](https://developer.marvel.com/)

## Setup

- Create a Marvel API account, get your puplic and private keys
    
- Create in the project root directory the .env file with the following content:

```bash
    NEXT_PUBLIC_API_BASE_URL='https://gateway.marvel.com/v1/public/'
    NEXT_PUBLIC_API_PUBLIC_KEY= Your puplic key inside ""
    NEXT_PUBLIC_API_PRIVATE_KEY= Your private key inside ""
```



```bash
git clone https://github.com/edpadua/Marvel/

cd marvel
npm i
npm run dev
```

## Demo

[Marvel](https://marvel-blush-kappa.vercel.app/)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com
