import { Header } from "../../../components/Design/pages/headers/Header";
import { Video } from "../../../components/Design/pages/video/video";
import { Widgets } from "../../../components/Design/pages/widgets/widgets";
import { Footer } from "../../../components/Design/pages/footer/footer";


import React from 'react'

export const Design = () => {
    return (
        <div >
            <Header />
        <Video />
        <Widgets />
        <Footer />
        </div>
    )
}
