'use client'
import { createContext, useContext, useState } from 'react';

interface SectionContextType {
    section :{
        id : string,
        title : string,
        subsections : [
            {
                id : string,
                title : string,
                content : string
            }
        ]
    }
}

const SectionContext = createContext<SectionContextType>({
    section : {
        id : '',
        title : '',
        subsections : [
            {
                id : '',
                title : '',
                content : ''
            }
        ]
    }
});
export const useSectionContext = () => useContext(SectionContext);
export default SectionContext;
