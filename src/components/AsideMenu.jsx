import { useState } from "react";
import { cn } from "../utils";

function AsideMenu() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        class="flex items-center gap-2"
      >
        <span class="text-xs text-gunmetal">Menú</span>
        <i class="bi bi-list text-4xl  text-gunmetal"></i>
      </button>

      <aside
        class={cn("flex justify-end fixed inset-0 duration-300 bg-black/30", {
          "opacity-100 z-10": toggle,
          "opacity-0 -z-10": !toggle,
        })}
      >
        <div
          class={cn(
            "flex flex-col p-6  rounded-tl-2xl rounded-bl-2xl2  max-w-80 h-full w-full duration-300 transition-transform bg-bone",
            {
              "translate-x-0": toggle,
              "translate-x-80": !toggle,
            }
          )}
        >
          <button
            onClick={() => setToggle(!toggle)}
            class="flex items-center justify-end gap-2 w-full"
          >
            <span class="text-xs text-gunmetal">Cerrar</span>
            <i class="bi bi-x text-4xl text-gunmetal"></i>
          </button>

          <ul class="flex flex-auto flex-col justify-center gap-y-8">
            <li>
              <a href="/academico" class="font-semibold text-xl text-gunmetal">
                Académico
              </a>
            </li>
            <li>
              <a
                href="/asistencial"
                class="font-semibold text-xl text-gunmetal"
              >
                Asistencial
              </a>
            </li>
            <li>
              <a href="/jornadas" class="font-semibold text-xl text-gunmetal">
                Jornadas realizadas
              </a>
            </li>
            <li>
              <a
                href="/testimonios"
                class="font-semibold text-xl text-gunmetal"
              >
                Testimonios de pacientes
              </a>
            </li>
            <li>
              <a href="/eventos" class="font-semibold text-xl text-gunmetal">
                Eventos
              </a>
            </li>
            <li>
              <a href="/ayuda" class="font-semibold text-xl text-gunmetal">
                Ayúdanos
              </a>
            </li>
            <li>
              <a
                href="/quienes-somos"
                class="font-semibold text-xl text-indigo-dye"
              >
                ¿Quienes somos?
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default AsideMenu;
