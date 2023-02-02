import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents() {
  const lastEventsFetch = useFetch(
    `http://gateway.marvel.com/v1/public/events?ts=1&apikey=4a0686d4bf24f7d586df891274df9803&hash=b79d2cea953d166052be117ef13d723a&orderBy=startDate&limit=5`
  );

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
