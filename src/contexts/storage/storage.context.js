import React from 'react'
import { AsyncWebStorage } from './async-web-storage'

export const appStorage = new AsyncWebStorage(new Map(Object.entries({ 
    navigating: false 
})))

export const StorageContext = React.createContext(appStorage)