import React from 'react'
import TitleContainer from './TitleContainer'
import LeagueForm from './LeagueForm'
import LeaguesContainer from './LeaguesContainer'
import { useState, useEffect } from 'react'

function MainPage() {



    return (
        <div>
            <TitleContainer/>
            <LeagueForm/>
            <LeaguesContainer/>
        </div>
    )


}

export default MainPage;