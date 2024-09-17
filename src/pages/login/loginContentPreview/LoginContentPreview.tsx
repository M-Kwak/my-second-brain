import Caroussel from "../../../components/caroussel/Caroussel";
import Container from "../../../components/container/Container";
import ArchivePreview from "../archivePreview/ArchivePreview";
import CalendarPreview from "../calendarPreview/CalendarPreview";
import ProgressPreview from "../progressPreview/ProgressPreview";
import VaultPreview from "../vaultPreview/VaultPreview";
import "./LoginContentPreview.scss";

function LoginContentPreview(): React.JSX.Element {
  return (
    <Container
      direction="row"
      id="loginPreviewMainContainer"
    >
      <h2>The world is too vast to remember everything,<br /> treat yourself to a second <span id="titleBrain">brain</span> !</h2>
      <Caroussel>
        <ArchivePreview />
        <VaultPreview />
        <CalendarPreview />
      </Caroussel>
    </Container>
  );
}

export default LoginContentPreview;
