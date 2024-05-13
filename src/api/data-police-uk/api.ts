import { LatLng, LatLngBounds } from 'leaflet';
import { Crime, CrimeCategory, CrimeDate, ForceData, Item } from './types';

const BASE_URL = 'https://data.police.uk/api';

export const getForces = async (): Promise<Item[]> => {
  const url = `${BASE_URL}/forces`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const getForce = async (forceId: string): Promise<ForceData> => {
  const url = `${BASE_URL}/forces/${forceId}`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const getNeighbourhoods = async (forceId: string): Promise<{ force: string; neighbourhood: string }[]> => {
  const url = `${BASE_URL}/${forceId}/neighbourhoods`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const locateNeighbourhood = async (latlng: LatLng): Promise<{ force: string; neighbourhood: string }> => {
  const url = `${BASE_URL}/locate-neighbourhood?q=${latlng.lat},${latlng.lng}`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const getCrimeCategories = async (): Promise<CrimeCategory[]> => {
  const url = `${BASE_URL}/forces`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const getCrimesInBounds = async (bounds: LatLngBounds, date: string): Promise<Crime[]> => {
  const url = `${BASE_URL}/crimes-street/all-crime?poly=${bounds.getNorthWest().lat},${bounds.getNorthWest().lng}:${bounds.getNorthEast().lat},${bounds.getNorthEast().lng}:${bounds.getSouthEast().lat},${bounds.getSouthEast().lng}:${bounds.getSouthWest().lat},${bounds.getSouthWest().lng}&date=${date}`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};

export const getCrimeDates = async (): Promise<CrimeDate[]> => {
  const url = `${BASE_URL}/crimes-street-dates`;
  const result = await fetch(url);
  const json = await result.json();

  return json;
};
