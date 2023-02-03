import { useState } from "react";
import { Grid, Header, Input } from "semantic-ui-react";
import Container from "../componets/Container";
import ListComics from "../componets/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);
  const [search, setSearch] = useState("");
  const urlBase = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=4a0686d4bf24f7d586df891274df9803&hash=b79d2cea953d166052be117ef13d723a&orderBy=focDate&limit=${renderComics}`
  const listComics = useFetch(
    urlBase
  );
  const handleSearchComic = (e) =>{
    setSearch(e.target.value);
  } 
  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Cómics</Header>
            <Input placeholder='Busca lo que quieras' onChange={(e)=> handleSearchComic(e)}  />
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
