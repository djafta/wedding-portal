'use client';
import { FormEvent, use, useRef, useState } from "react";
import { PDF } from "./pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/material";

export default function Page() {
  const [state, setState] = useState({
    quantity: 0,
    table: '',
    guests: ''
  })

  const ref = useRef<HTMLFormElement>(null);

  const [dialogFormOpen, setDialogFormOpen] = useState(false);
  const [dialogInvitationOpen, setDialogInvitationOpen] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(state);

    if (Number(state.quantity) > 0 && !!state.guests && !!state.table) {
      setDialogFormOpen(false)
      setDialogInvitationOpen(true);
    }
  }

  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full flex">
        <div className={'w-full max-w-3xl h-full relative bg-[url(/cover-2.png)] bg-cover bg-center flex m-auto'}>
          <div className="h-[inherit] w-full flex flex-col justify-between">
            <div className="h-full flex flex-col justify-center gap-10 mt-40">
              <div className="text-center leading-10 text-[100%]">
                <button className={'rounded-xl px-3 py-1 border'} onClick={() => setDialogFormOpen(true)}>Criar convite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog fullWidth open={dialogFormOpen} onClose={() => setDialogFormOpen(false)}>
        <DialogTitle>Criar convite</DialogTitle>
        <form onSubmit={submit} ref={ref} onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setState((state) => ({ ...state, [target.name]: target.value }))
        }}>
          <DialogContent>
            <FormControl fullWidth>
              <FormLabel>Convidados</FormLabel>
              <Input required placeholder={'Ex: Merla Rui e Stefany Dute'} type={'text'} name={'guests'} />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Quantidade</FormLabel>
              <Input required placeholder={'Ex: 3'} type={'number'} name={'quantity'} />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Mesa</FormLabel>
              <Input required placeholder={'Ex: Laranja'} type={'text'} name={'table'} />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogFormOpen(false)}>Cancelar</Button>
            <Button variant={'contained'} type="submit">Continuar</Button>
          </DialogActions>
        </form>
      </Dialog >

      <Dialog fullWidth maxWidth={'sm'} open={dialogInvitationOpen} onClose={() => setDialogInvitationOpen(false)}>
        <DialogContent>
          < main className={'flex gap-5 flex-col'} >
            <div className="mx-auto my-3">
              <p>Deseja gerar o convite para {state.guests}, válido para {state.quantity} {state.quantity>1? 'pessoas' : 'pessoa'} na mesa {state.table}?</p>
            </div>
          </main >
        </DialogContent>
        <DialogActions>
          <div className="w-full h-full mt-2 flex gap-3">
            <button  onClick={() => setDialogInvitationOpen(false)} className={'rounded-xl p-3 border'} >
              Cancelar
            </button>
            <PDFDownloadLink className={'rounded-xl p-3 bg-black text-white'} document={<PDF {...state} />} fileName={`${state.guests} Invitation`}>
              {({ blob, url, loading, error }) =>
                loading ? 'Caregando...' : 'Baixar'
              }
            </PDFDownloadLink>
          </div>
        </DialogActions>
      </Dialog>
    </>
  )
}
