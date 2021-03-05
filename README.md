# Photos-n-Albums

A simple https://jsonplaceholder.typicode.com API consumer,
it will display the following data entities: photos and albums.

## Tech Used

- RectJS
- Typescript
- NextJS
- Vercel
- 3rd Parties: react-hook-form, classnames

## Running locally

First you will need to clone the project

```shell
git clone https://github.com/fernando-mf/photos-n-albums.git
```

Then `cd` to the project folder and install the app's dependencies

```shell
cd photos-n-albums
yarn install
```

Now you can run the app

```shell
yarn dev
```

## Deployments

You can use Vercel to deploy the app, it provides user-friendly git integration,
you just link your git repo et voilà Vercel will automatically deploy every time
you push to the master branch.

## Static Generation

If you just need the static bundle (html, js, css) you can run

```shell
yarn static
```

That will build the project and generate a static html page that can be distributed
as a static file in your own server or storage provider (express static, aws s3, etc)