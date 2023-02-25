import { Modal, useMantineTheme } from "@mantine/core";

function NewGModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h1>Group info</h1>

        <div>
          <input
            type="text"
            className="infoInput"
            name="GroupName"
            placeholder="Group Name"
          />

        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="GroupDescription"
            placeholder="Group Description"
          />
        </div>

        <div>

            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default NewGModel;
