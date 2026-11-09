export const LISTENER_POSITION = [0, 1.15, 3.6];

const bed5 = [
  { id: "L", label: "L", group: "front", position: [-3.45, 2.55, -6.75], aimTarget: LISTENER_POSITION },
  { id: "R", label: "R", group: "front", position: [3.45, 2.55, -6.75], aimTarget: LISTENER_POSITION },
  { id: "C", label: "C", group: "front", position: [0, 2.05, -6.95], aimTarget: LISTENER_POSITION },
  { id: "Ls", label: "Ls", group: "side", position: [-5.55, 2.55, 0.25], aimTarget: LISTENER_POSITION },
  { id: "Rs", label: "Rs", group: "side", position: [5.55, 2.55, 0.25], aimTarget: LISTENER_POSITION }
];

const bed7 = [
  ...bed5.slice(0, 3),
  { id: "Ls", label: "Ls", group: "side", position: [-5.55, 2.55, -1.75], aimTarget: LISTENER_POSITION },
  { id: "Rs", label: "Rs", group: "side", position: [5.55, 2.55, -1.75], aimTarget: LISTENER_POSITION },
  { id: "Lrs", label: "Lrs", group: "back", position: [-4.6, 2.55, 5.25], aimTarget: LISTENER_POSITION },
  { id: "Rrs", label: "Rrs", group: "back", position: [4.6, 2.55, 5.25], aimTarget: LISTENER_POSITION }
];

const speakers = {
  sub1: { id: "SUB-L", label: "SUB", group: "sub", position: [-3.25, 0.45, -5.75], aimTarget: LISTENER_POSITION },
  sub2: { id: "SUB-R", label: "SUB", group: "sub", position: [3.25, 0.45, -5.75], aimTarget: LISTENER_POSITION },
  tml: { id: "TML", label: "TML", group: "height", position: [-2.15, 6.85, -0.15], aimTarget: LISTENER_POSITION },
  tmr: { id: "TMR", label: "TMR", group: "height", position: [2.15, 6.85, -0.15], aimTarget: LISTENER_POSITION },
  tfl: { id: "TFL", label: "TFL", group: "height", position: [-3.15, 6.85, -3.35], aimTarget: LISTENER_POSITION },
  tfr: { id: "TFR", label: "TFR", group: "height", position: [3.15, 6.85, -3.35], aimTarget: LISTENER_POSITION },
  trl: { id: "TRL", label: "TRL", group: "height", position: [-3.15, 6.85, 3.15], aimTarget: LISTENER_POSITION },
  trr: { id: "TRR", label: "TRR", group: "height", position: [3.15, 6.85, 3.15], aimTarget: LISTENER_POSITION }
};

function layout(bed, subs, height) {
  return [
    ...bed.map((speaker) => ({ ...speaker, aimTarget: [...speaker.aimTarget] })),
    ...(subs === 2 ? [speakers.sub1, speakers.sub2] : [speakers.sub1]),
    ...height
  ];
}

export const SPEAKER_LAYOUTS = [
  { name: "5.1", bed: 5, subs: 1, height: 0, speakers: layout(bed5, 1, []) },
  { name: "5.2", bed: 5, subs: 2, height: 0, speakers: layout(bed5, 2, []) },
  { name: "5.1.2", bed: 5, subs: 1, height: 2, speakers: layout(bed5, 1, [speakers.tml, speakers.tmr]) },
  { name: "5.1.4", bed: 5, subs: 1, height: 4, speakers: layout(bed5, 1, [speakers.tfl, speakers.tfr, speakers.trl, speakers.trr]) },
  { name: "5.2.2", bed: 5, subs: 2, height: 2, speakers: layout(bed5, 2, [speakers.tml, speakers.tmr]) },
  { name: "5.2.4", bed: 5, subs: 2, height: 4, speakers: layout(bed5, 2, [speakers.tfl, speakers.tfr, speakers.trl, speakers.trr]) },
  { name: "7.1", bed: 7, subs: 1, height: 0, speakers: layout(bed7, 1, []) },
  { name: "7.2", bed: 7, subs: 2, height: 0, speakers: layout(bed7, 2, []) },
  { name: "7.1.2", bed: 7, subs: 1, height: 2, speakers: layout(bed7, 1, [speakers.tml, speakers.tmr]) },
  { name: "7.1.4", bed: 7, subs: 1, height: 4, speakers: layout(bed7, 1, [speakers.tfl, speakers.tfr, speakers.trl, speakers.trr]) },
  { name: "7.2.2", bed: 7, subs: 2, height: 2, speakers: layout(bed7, 2, [speakers.tml, speakers.tmr]) },
  { name: "7.2.4", bed: 7, subs: 2, height: 4, speakers: layout(bed7, 2, [speakers.tfl, speakers.tfr, speakers.trl, speakers.trr]) }
];
