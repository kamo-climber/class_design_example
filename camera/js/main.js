import Validator from './modules/validator.module.js';
import Factory from './modules/factory.js';
import FilmSpecs from './modules/film/film-specs.module.js';
import Film from './modules/film/film.module.js';
import LensSpecs from './modules/lens/lens-specs.module.js';
import Lens from './modules/lens/lens.module.js';
import FilmCameraSpecs from './modules/film-camera/film-camera-specs.module.js';
import FilmCamera from './modules/film-camera/film-camera.module.js';

{
  const validator = new Validator();
  const factory = new Factory(validator);

  // 製品タイプごとに生成関数を登録
  factory.register('film', (validator, specs) => {
    return new Film(new FilmSpecs(validator, specs));
  });

  factory.register('lens', (validator, specs) => {
    return new Lens(new LensSpecs(validator, specs));
  });

  factory.register('filmCamera', (validator, specs) => {
    return new FilmCamera(new FilmCameraSpecs(validator, specs));
  });

  const kodakGold200 = factory.create('film', {
    productName: 'Kodak Gold 200',
    limit: 36,
    iso: 200,
    size: 35
  });

  const aisNikkor50mm = factory.create('lens', {
    productName: 'Ai-s Nikkor 50mm F1.4',
    mountType: 'F',
    fNumber: 1.4,
    focalLength: [50]
  });

  const nikonF3 = factory.create('filmCamera', {
    productName: 'Nikon F3',
    filmSize: 35,
    lensMountType: 'F'
  });

  nikonF3.mountFilm(kodakGold200);
  nikonF3.mountLens(aisNikkor50mm);
  nikonF3.zoom(50);
  nikonF3.focus();
  nikonF3.shutter();


  const kodakPortra400 = factory.create('film', {
    productName: 'Kodak Portra 400',
    limit: 36,
    iso: 400,
    size: 35
  });

  nikonF3.mountFilm(kodakPortra400);
  nikonF3.focus();
  nikonF3.shutter();

  const aisNikkor28mm = factory.create('lens', {
    productName: 'Ai-s Nikkor 28mm F2.8',
    mountType: 'F',
    fNumber: 2.8,
    focalLength: [28]
  });

  nikonF3.mountLens(aisNikkor28mm);
  nikonF3.zoom(28);
  nikonF3.focus();
  nikonF3.shutter();
}