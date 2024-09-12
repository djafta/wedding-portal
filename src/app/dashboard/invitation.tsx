
export function Invitation({ quantity, table, guests }: { quantity: number, table: string, guests: string }) {
    return (
        <div className={'relative b5 bg-[url(/cover.png)] bg-contain flex'}>
            <div className="h-[20cm] w-full flex flex-col justify-between">
                <div className="h-full w-full flex justify-center items-end">
                    <p>JUNTAMENTE COM AS SUAS FAMÍLIAS</p>
                </div>
                <div className="h-60">

                </div>
                <div className="h-full flex flex-col justify-center gap-10">
                    <div className="text-center leading-10 text-[100%]">
                        <p>TÊM A HONRA DE CONVIDAR</p>
                        <p className="underline">{guests}</p>
                        <p>PARA A CERIMÓNIA DO SEU CASAMENTO</p>
                    </div>
                    <div className="text-center text-2xl font-serif">
                        06 de Dezembro de 2024
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 p-10 flex gap-5 text-xs text-gray-600">
                <p>Convite válido para {quantity} pessoas</p>
                <span>|</span>
                <p>Mesa {table}</p>
            </div>
        </div>
    )
}
