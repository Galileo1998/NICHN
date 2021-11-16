import React from 'react'
import MainBanner from '../components/Web/MainBanner';
import HomeCourses from '../components/Web/HomeCourses/HomeCourses';
import HowMyCoursesWork from '../components/Web/HowMyCoursesWork/HowMyCoursesWork';
import Logos from '../components/Web/Logos';
import FAQ from '../components/Web/FAQ';

export default function Home(){
    return(
        <>
        <MainBanner/>
        <HomeCourses/>
        <HowMyCoursesWork/>
        <FAQ/>
        <Logos/>
        </>
    );
}