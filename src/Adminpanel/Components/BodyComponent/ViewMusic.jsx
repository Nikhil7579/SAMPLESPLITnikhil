import { Box } from "@mui/system";
import React from "react";
import { PageHeader } from "../../Common/Components";
import AudioPlayer from "../Music Player/AudioPlayer";
import tracks from "../Music Player/tracks";

const ViewMusic = () => {
    return(
        <>
        <Box mt={2}>
        <PageHeader title='View Music' />
      </Box>
      <AudioPlayer tracks={tracks} />

        </>
    )
}
export default ViewMusic;