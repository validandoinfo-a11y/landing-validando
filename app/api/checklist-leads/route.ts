import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } },
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";
    const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
    const prestador = typeof body.prestador === "string" ? body.prestador.trim() : "";
    const tipoPrestador = typeof body.tipo_prestador === "string" ? body.tipo_prestador.trim() : "";
    const porcentaje = Number(body.porcentaje);
    const nivel = typeof body.nivel === "string" ? body.nivel.trim() : "";

    if (!nombre || !whatsapp || !prestador || !tipoPrestador || !nivel || !Number.isInteger(porcentaje) || porcentaje < 0 || porcentaje > 100) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    const { error } = await supabase.from("checklist_leads").insert({
      nombre,
      whatsapp,
      prestador,
      tipo_prestador: tipoPrestador,
      porcentaje,
      nivel,
    });

    if (error) {
      console.error("[v0] No se pudo guardar el lead:", error);
      return NextResponse.json({ error: "No se pudo guardar el lead" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[v0] Error inesperado guardando el lead:", error);
    return NextResponse.json({ error: "No se pudo guardar el lead" }, { status: 500 });
  }
}
