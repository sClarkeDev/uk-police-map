import { NextResponse } from 'next/server';

export const GET = async (request: Request, { params }: { params: { z: string; x: string; y: string } }) => {
  const { z, x, y } = params;
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');

  const url = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/tiles/${z}/${x}/${y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;
  const res = await fetch(url);

  const response = new NextResponse(res.body);
  response.headers.set('content-type', 'image/png');
  return response;
};
