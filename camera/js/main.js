import Validator from './modules/validator.module.js';
import Factory from './modules/factory.js';

{
  const validator = new Validator();
  const factory = new Factory(validator);

  const kodakGold200 = factory.createFilm({ productName: 'Kodak Gold 200', limit: 36, iso: 200, size: 35 });
  const aisNikkor50mmF1_4 = factory.createLens({ productName: 'Ai-s Nikkor 50mm F1.4', mountType: 'F', fNumber: 1.4, focalLength: [50] });
  const nikonF3 = factory.createFilmCamera({ productName: 'Nikon F3', filmSize: 35, lensMountType: 'F' });

  nikonF3.mountFilm(kodakGold200);
  nikonF3.mountLens(aisNikkor50mmF1_4);
  nikonF3.zoom(50);
  nikonF3.focus();
  nikonF3.shutter();

  const kodakPortra400 = factory.createFilm({ productName: 'Kodak Portra 400', limit: 36, iso: 400, size: 35 });
  nikonF3.mountFilm(kodakPortra400);
  nikonF3.focus();
  nikonF3.shutter();

  const aisNikkor28mmF2_8 = factory.createLens({ productName: 'Ai-s Nikkor 28mm F2.8', mountType: 'F', fNumber: 2.8, focalLength: [28] });
  nikonF3.mountLens(aisNikkor28mmF2_8);
  nikonF3.zoom(28);
  nikonF3.focus();
  nikonF3.shutter();

  // for(let i=1; i<39; i++) {
  //   nikonF3.takeAphoto();
  // }
}