import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Ajutine avaleht baaskomponentide näitamiseks. Päris sisu tuleb issue'des #9 ja #10.
export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Minu tööd</h1>
        <p className="mt-1 text-muted">Siin on näha, mis on järgmisena vaja valmis saada.</p>
      </div>

      <Card className="flex flex-col gap-4">
        <Input id="demo" label="Pealkiri" placeholder="nt Kodutöö 3" />
        <div className="flex gap-2">
          <Button>Lisa töö</Button>
          <Button variant="secondary">Tühista</Button>
          <Button disabled>Salvestan...</Button>
        </div>
        <p className="text-sm text-warning">Tähtaeg möödas</p>
      </Card>
    </div>
  );
}
