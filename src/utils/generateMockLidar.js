export const generateMockLidar = (count = 150000, colorMode = 'height') => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const x = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;

    // Terreo
    let y = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2;
    if (Math.abs(x) < 5 && Math.abs(z) < 5) y = Math.random() * 20;

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // Cores
    if (colorMode === 'height') {
      // Gradiente por altura
      colors[i3] = y / 20;
      colors[i3 + 1] = 0.5;
      colors[i3 + 2] = 1 - (y / 20);
    } else if (colorMode === 'forest') {
      // Tons de Verde e Marrom
      colors[i3] = 0.2;
      colors[i3 + 1] = 0.4 + (y / 40);
      colors[i3 + 2] = 0.2;
    } else if (colorMode === 'fire') {
      // Tons de Laranja e Amarelo
      colors[i3] = 1.0;
      colors[i3 + 1] = 0.2 + (y / 25);
      colors[i3 + 2] = 0.0;
    }
  }

  return { positions, colors };
};