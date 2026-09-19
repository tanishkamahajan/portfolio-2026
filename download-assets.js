import fs from 'fs';
import path from 'path';
import http from 'http';

const assets = [
  { name: 'logo.svg', url: 'http://localhost:3845/assets/871147af33dfdcf6c8c975633b6978847999cb8e.svg' },
  { name: 'logo-default.svg', url: 'http://localhost:3845/assets/06c713a5fb877e036cd103d90208bb7f9a07b1b4.svg' },
  { name: 'logo-variant2.svg', url: 'http://localhost:3845/assets/cda430f0c87677c4737bf06011a78cf72650079f.svg' },
  { name: 'work-circle.svg', url: 'http://localhost:3845/assets/078bbef05150baa6bb68a64a3c3a343231baf1af.svg' },
  { name: 'resume-btn-default.svg', url: 'http://localhost:3845/assets/55a0db88d91c31a5e0da085f8c69fbadbb781d13.svg' },
  { name: 'resume-btn-variant2.svg', url: 'http://localhost:3845/assets/1938c52a5eca7730136ab8981a90863ea1a410ea.svg' },
  { name: 'email-btn-default.svg', url: 'http://localhost:3845/assets/7011e545db8eeb093298769feb4943398d9eecdc.svg' },
  { name: 'email-btn-copied.svg', url: 'http://localhost:3845/assets/f1d806e9297ef541f310376c918b41b96a7e16f6.svg' },
  { name: 'name.png', url: 'http://localhost:3845/assets/a30200c5568d2716a85a88de0b121c07770fdbe2.png' },
  { name: 'wavy-line.svg', url: 'http://localhost:3845/assets/43ba40c115b843b2e59a6c5f3d25475c34aa4d84.svg' },
  { name: 'spiral-who.png', url: 'http://localhost:3845/assets/744c00127e4fe16951b9ce9b91bdf016fea33fed.png' },
  { name: 'spiral-why.png', url: 'http://localhost:3845/assets/ee9dd08c6f6eb45be2f0e7471507ac8942eb8ca7.png' },
  { name: 'doodle-who.svg', url: 'http://localhost:3845/assets/906d4e7261af4aef9d7062815a5b70d7200c6a16.svg' },
  { name: 'doodle-why.svg', url: 'http://localhost:3845/assets/5b1562b48d1cdc4ea2d981789cddd385a5f1b4cf.svg' },
  { name: 'doodle-what.svg', url: 'http://localhost:3845/assets/f56be70d3c3a3afea9436647b45ddf61ea24a741.svg' },
  { name: 'doodle-underline.svg', url: 'http://localhost:3845/assets/793a23a1a522497c306cfb19333d6b0ad83aa09b.svg' },
  { name: 'card-bg-top.svg', url: 'http://localhost:3845/assets/acd7db080233555874dc6fda028e0d16a7e0628d.svg' },
  { name: 'card-bg-bottom.svg', url: 'http://localhost:3845/assets/70e8e72a69d5e7527112a8f7510faa14ea283e24.svg' },
  { name: 'grid-lines.svg', url: 'http://localhost:3845/assets/27f0259f8f690fdd8eecc005864e96b773290f6b.svg' },
  { name: 'avatar-sticker.png', url: 'http://localhost:3845/assets/0af1e37f4f31e4e266cbb3e8f672a422d789a796.png' },
  { name: 'line-vertical-left.svg', url: 'http://localhost:3845/assets/ae25f7929f1c4ac4d07153645c6cc17bb4a01ada.svg' },
  { name: 'line-vertical-right.svg', url: 'http://localhost:3845/assets/36ff7a552b730b8b9a8ea486d269d9b8b5abb034.svg' }
];

const targetDir = path.resolve('public', 'assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Downloading assets...');
assets.forEach(asset => {
  const filePath = path.join(targetDir, asset.name);
  const file = fs.createWriteStream(filePath);
  http.get(asset.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Saved ${asset.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${asset.name}: ${err.message}`);
  });
});
