import prisma from '../../config/prisma.js';

export const getRentaLiquitaDetalle = async (renLiq, student) => {
  try{
    const res = await prisma.report.findFirst({
        where: {
          stuID: student.stuID,
          roomID: student.roomID,
        },
        select: {
            detID: true,
        },
    });

    const detReg = await prisma.formdetallerenglones.findUnique({
        where: {
            detID: res.detID,
        }
    });

    if (!detReg) {
        return { message: 'Formulario no encontrado' };
    }

    const content = detReg.detContent;

    /**
     * Valor Contable ingresos actividad industrial y comercial
     */
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaTerritorioNacional.ValorContable = content.R47.VentBien.CliNac.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaExportacion.ValorContable = content.R47.VentBien.Export.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaZonaFranca.ValorContable = content.R47.VentBien.CliZonFrac.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaComercializadorasInternacionales.ValorContable = content.R47.VentBien.SocCom.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaJurisdiccionesNoCooperantes.ValorContable = content.R47.VentBien.CliJuri.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaVinculadoEconomicosFranca.ValorContable = content.R47.VentBien.VincEcoZonFrac.SaldCont;  
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosTerritorioNacional.ValorContable = content.R47.ServGen.CliNac.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosExportacion.ValorContable = content.R47.ServGen.Export.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosZonaFranca.ValorContable = content.R47.ServGen.CliZonFrac.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosComercializadorasInternacionales.ValorContable = content.R47.ServGen.SocCom.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosJurisdiccionesNoCooperantes.ValorContable = content.R47.ServGen.CliJuri.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosVinculadoEconomicosFranca.ValorContable = content.R47.ServGen.VincEcoZonFrac.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ServiciosConstruccion.ValorContable = content.R47.ServConst.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.AcuerdosConcesion.ValorContable = content.R47.AcuConcServ.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ArrendamientosOperativos.ValorContable = content.R47.ArrenOper.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Regalias.ValorContable = content.R47.Regal.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Comisiones.ValorContable = content.R47.Comis.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.HonorariosProfesionales.ValorContable = content.R47.HonProf.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ActividadesSegurosCapitalizacion.ValorContable = content.R47.ActSegCap.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.LiberacionReservasContratosSeguros.ValorContable = content.R47.LibRes.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ComisionesBancarias.ValorContable = content.R47.ComBanc.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.OtrosIngresos.ValorContable = content.R47.Otro.SaldCont;

    /**
     * Menos valor Fiscal ingresos actividad industrial y comercial
     */

    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaTerritorioNacional.MenorValorFiscal = content.R47.VentBien.CliNac.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaExportacion.MenorValorFiscal = content.R47.VentBien.Export.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaZonaFranca.MenorValorFiscal = content.R47.VentBien.CliZonFrac.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaComercializadorasInternacionales.MenorValorFiscal = content.R47.VentBien.SocCom.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaJurisdiccionesNoCooperantes.MenorValorFiscal = content.R47.VentBien.CliJuri.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaVinculadoEconomicosFranca.MenorValorFiscal = content.R47.VentBien.VincEcoZonFrac.Ajust1;  
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosTerritorioNacional.MenorValorFiscal = content.R47.ServGen.CliNac.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosExportacion.MenorValorFiscal = content.R47.ServGen.Export.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosZonaFranca.MenorValorFiscal = content.R47.ServGen.CliZonFrac.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosComercializadorasInternacionales.MenorValorFiscal = content.R47.ServGen.SocCom.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosJurisdiccionesNoCooperantes.MenorValorFiscal = content.R47.ServGen.CliJuri.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosVinculadoEconomicosFranca.MenorValorFiscal = content.R47.ServGen.VincEcoZonFrac.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ServiciosConstruccion.MenorValorFiscal = content.R47.ServConst.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.AcuerdosConcesion.MenorValorFiscal = content.R47.AcuConcServ.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ArrendamientosOperativos.MenorValorFiscal = content.R47.ArrenOper.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Regalias.MenorValorFiscal = content.R47.Regal.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Comisiones.MenorValorFiscal = content.R47.Comis.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.HonorariosProfesionales.MenorValorFiscal = content.R47.HonProf.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ActividadesSegurosCapitalizacion.MenorValorFiscal = content.R47.ActSegCap.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.LiberacionReservasContratosSeguros.MenorValorFiscal = content.R47.LibRes.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ComisionesBancarias.MenorValorFiscal = content.R47.ComBanc.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.OtrosIngresos.MenorValorFiscal = content.R47.Otro.Ajust1;

    /**
     * Mayor valor Fiscal ingresos actividad industrial y comercial
     */

    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaTerritorioNacional.MayorValorFiscal = content.R47.VentBien.CliNac.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaExportacion.MayorValorFiscal = content.R47.VentBien.Export.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaZonaFranca.MayorValorFiscal = content.R47.VentBien.CliZonFrac.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaComercializadorasInternacionales.MayorValorFiscal = content.R47.VentBien.SocCom.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaJurisdiccionesNoCooperantes.MayorValorFiscal = content.R47.VentBien.CliJuri.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.VentaVinculadoEconomicosFranca.MayorValorFiscal = content.R47.VentBien.VincEcoZonFrac.Ajust3;  
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosTerritorioNacional.MayorValorFiscal = content.R47.ServGen.CliNac.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosExportacion.MayorValorFiscal = content.R47.ServGen.Export.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosZonaFranca.MayorValorFiscal = content.R47.ServGen.CliZonFrac.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosComercializadorasInternacionales.MayorValorFiscal = content.R47.ServGen.SocCom.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosJurisdiccionesNoCooperantes.MayorValorFiscal = content.R47.ServGen.CliJuri.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.PrestacionServiciosVinculadoEconomicosFranca.MayorValorFiscal = content.R47.ServGen.VincEcoZonFrac.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ServiciosConstruccion.MayorValorFiscal = content.R47.ServConst.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.AcuerdosConcesion.MayorValorFiscal = content.R47.AcuConcServ.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ArrendamientosOperativos.MayorValorFiscal = content.R47.ArrenOper.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Regalias.MayorValorFiscal = content.R47.Regal.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.Comisiones.MayorValorFiscal = content.R47.Comis.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.HonorariosProfesionales.MayorValorFiscal = content.R47.HonProf.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ActividadesSegurosCapitalizacion.MayorValorFiscal = content.R47.ActSegCap.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.LiberacionReservasContratosSeguros.MayorValorFiscal = content.R47.LibRes.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.ComisionesBancarias.MayorValorFiscal = content.R47.ComBanc.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.IngresosNetosActividadIndustrialCoSer.OtrosIngresos.MayorValorFiscal = content.R47.Otro.Ajust3;
    
    /**
     * Valor contable devoluciones y rebajas
     */
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.VentaBienes.ValorContable = content.R59.VentBien.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.PrestacionServicios.ValorContable = content.R59.PresServ.SaldCont;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.OtrasDevoluciones.ValorContable = content.R59.Otro.SaldCont;

    /**
     * Menor valor fiscal devoluciones y rebajas
     */
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.VentaBienes.MenorValorFiscal = content.R59.VentBien.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.PrestacionServicios.MenorValorFiscal = content.R59.PresServ.Ajust1;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.OtrasDevoluciones.MenorValorFiscal = content.R59.Otro.Ajust1;

    /**
     * Mayor valor fiscal devoluciones y rebajas
     */

    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.VentaBienes.MayorValorFiscal = content.R59.VentBien.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.PrestacionServicios.MayorValorFiscal = content.R59.PresServ.Ajust3;
    renLiq.Ingresos.IngresosNetosActividadIndustrialCoSer.DevolucionesRebajasDescuentos.OtrasDevoluciones.MayorValorFiscal = content.R59.Otro.Ajust3;

    /**
     * Valor contable ingresos financieros
     */

    renLiq.Ingresos.IngresosFinancieros.ArrendamientoFinanciero.ValorContable = content.R48["421005"].ArreFinMerc.SaldCont;
    renLiq.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.ValorContable = content.R48["421005"].IntFin.SaldCont;
    renLiq.Ingresos.IngresosFinancieros.InteresesPrestamosTerceros.ValorContable = content.R48["421005"].IntPrest.SaldCont;
    renLiq.Ingresos.IngresosFinancieros.IntrumentosFinancierosMedidos.ValorContable = content.R48["421005"].IntFinAmrt.SaldCont;
    renLiq.Ingresos.IngresosFinancieros.InteresesImplicitos.ValorContable = content.R48["421005"].IntImplc.SaldCont;
    renLiq.Ingresos.IngresosFinancieros.DiferenciaCambio.ValorContable = content.R48["421020"].SaldCont;
    renLiq.Ingresos.IngresosFinancieros.OtrosIngresos.ValorContable = content.R48["421021"].SaldCont;

    /**
     * Menor valor fiscal ingresos financieros
     */

    renLiq.Ingresos.IngresosFinancieros.ArrendamientoFinanciero.MenorValorFiscal = content.R48["421005"].ArreFinMerc.Ajust1;
    renLiq.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.MenorValorFiscal = content.R48["421005"].IntFin.Ajust1;
    renLiq.Ingresos.IngresosFinancieros.InteresesPrestamosTerceros.MenorValorFiscal = content.R48["421005"].IntPrest.Ajust1;
    renLiq.Ingresos.IngresosFinancieros.DiferenciaCambio.MenorValorFiscal = content.R48["421020"].Ajust1;
    renLiq.Ingresos.IngresosFinancieros.OtrosIngresos.MenorValorFiscal = content.R48["421021"].Ajust1;

    /**
     * Mayor valor fiscal ingresos financieros
     */

    renLiq.Ingresos.IngresosFinancieros.ArrendamientoFinanciero.MayorValorFiscal = content.R48["421005"].ArreFinMerc.Ajust3;
    renLiq.Ingresos.IngresosFinancieros.InteresesSectorFinanciero.MayorValorFiscal = content.R48["421005"].IntFin.Ajust3;
    renLiq.Ingresos.IngresosFinancieros.InteresesPrestamosTerceros.MayorValorFiscal = content.R48["421005"].IntPrest.Ajust3;
    renLiq.Ingresos.IngresosFinancieros.DiferenciaCambio.MayorValorFiscal = content.R48["421020"].Ajust3;

    /**
     * Valor contable Ganancias por inversiones subcidarias y asociadas
     */

    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.GananciasMetodoParticipacion.ValorContable = content.R57["429501"].GananApli.SaldCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.GananciasCambioValorRazonable.ValorContable = content.R57["429501"].GananCamb.InvAsoSubNegCon.SaldCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesNoContribuyentes.ValorContable = content.R49.TotCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesDistribuidosEntidadesNoColombia.ValorContable = content.R50.ValCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasTarifaGeneral.ValorContable = content.R51.ValCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasPersonaNatural.ValorContable = content.R52.TotCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasPersonaNaturalSinResidencia.ValorContable = content.R53.TotCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipaciones10.ValorContable = content.R54.TotCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasTarifaGeneralExtranjeras.ValorContable = content.R55.ValCont;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosProyectosMegainversion.ValorContable = content.R56.TotCont;

    /**
     * Menor valor fiscal Ganancias por inversiones subcidarias y asociadas
     */

    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesNoContribuyentes.MenorValorFiscal = content.R49.RecSocNacMeg.Ajust1 + content.R49.RecSocNacNoMegNoSoc.Ajust1 + content.R49.RecSocNacNoMegSoc.Ajust1 + content.R49.RecSocNacSim.Ajust1;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasPersonaNatural.MenorValorFiscal = content.R52.RecSocNacMeg.Ajust1 + content.R52.RecSocNacNoMegNoSoc.Ajust1 + content.R52.RecSocNacNoMegSoc.Ajust1 + content.R52.RecSocNacSim.Ajust1;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesGravadasPersonaNaturalSinResidencia.MenorValorFiscal = content.R53.RecSocNacNoMegNoSoc.Ajust1 + content.R53.RecSocNacNoMegSoc.Ajust1 + content.R53.RecSocNacSim.Ajust1;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipaciones10.MenorValorFiscal = content.R54.RecSocNacNoMegNoSoc.Ajust1 + content.R54.RecSocNacNoMegSoc.Ajust1 + content.R54.RecSocNacSim.Ajust1;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosProyectosMegainversion.MenorValorFiscal = content.R56.RecSocNacMeg.Ajust1;

    /**
     * Mayor valor fiscal Ganancias por inversiones subcidarias y asociadas
     */

    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipacionesNoContribuyentes.MayorValorFiscal = content.R49.RecSocNacMeg.Ajust3 + content.R49.RecSocNacNoMegNoSoc.Ajust3 + content.R49.RecSocNacNoMegSoc.Ajust3 + content.R49.RecSocNacSim.Ajust3;
    DividendosParticipacionesGravadasPersonaNatural.MayorValorFiscal = content.R52.RecSocNacMeg.Ajust3 + content.R52.RecSocNacNoMegNoSoc.Ajust3 + content.R52.RecSocNacNoMegSoc.Ajust3 + content.R52.RecSocNacSim.Ajust3;
    DividendosParticipacionesGravadasPersonaNaturalSinResidencia.MayorValorFiscal = content.R53.RecSocNacNoMegNoSoc.Ajust3 + content.R53.RecSocNacNoMegSoc.Ajust3 + content.R53.RecSocNacSim.Ajust3;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosParticipaciones10.MayorValorFiscal = content.R54.RecSocNacNoMegNoSoc.Ajust3 + content.R54.RecSocNacNoMegSoc.Ajust3 + content.R54.RecSocNacSim.Ajust3;
    renLiq.Ingresos.GananciasInversionesSubsidiariasAsociadasNegocios.DividendosProyectosMegainversion.MayorValorFiscal = content.R56.RecSocNacMeg.Ajust3;

    /**
     * Valor contable Ingresos por mediciones valor razonable
     */

    renLiq.Ingresos.IngresosPorMedicionesValorRazonable.ActivosBiologicos.ValorContable = content.R57["429501"].GananCamb.GananCamb.SaldCont;
    renLiq.Ingresos.IngresosPorMedicionesValorRazonable.PropiedadesInversion.ValorContable = content.R57["429501"].GananCamb.PropInv.SaldCont;
    renLiq.Ingresos.IngresosPorMedicionesValorRazonable.InstrumentosFinancieros.ValorContable = content.R57["429501"].GananCamb.InstFinan.SaldCont;
    renLiq.Ingresos.IngresosPorMedicionesValorRazonable.InstrumentosDerivados.ValorContable = content.R57["429501"].GananCamb.InstDer.SaldCont;
    renLiq.Ingresos.IngresosPorMedicionesValorRazonable.Otros.ValorContable = content.R57["429501"].GananCamb.Otro.SaldCont;

    /**
     * Valor contable Utilidad en la venta o enajenacion de activos, bienes peseidos menos dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesPlanta.ValorContable = content.R57["4245"].Menos2.PrpPlntEqp.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesInversion.ValorContable = content.R57["4245"].Menos2.PrpInv.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosBiologicos.ValorContable = content.R57["4245"].Menos2.ActBio.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R57["4245"].Menos2.ActNoCorr.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosIntangibles.ValorContable = content.R57["4245"].Menos2.ActInta.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.InversionesAccionesOtrasParticipaciones.ValorContable = content.R57["4245"].Menos2.InvAccOtro.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.DisposicionOtrosInstrumentosFinancieros.ValorContable = content.R57["4245"].Menos2.DispInstr.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.Otros.ValorContable = content.R57["4245"].Menos2.Otro.SaldCont;

    /**
     * Menor valor fiscal Utilidad en la venta o enajenacion de activos, bienes peseidos menos dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesPlanta.MenorValorFiscal = content.R57["4245"].Menos2.PrpPlntEqp.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesInversion.MenorValorFiscal = content.R57["4245"].Menos2.PrpInv.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosBiologicos.MenorValorFiscal = content.R57["4245"].Menos2.ActBio.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MenorValorFiscal = content.R57["4245"].Menos2.ActNoCorr.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosIntangibles.MenorValorFiscal = content.R57["4245"].Menos2.ActInta.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.InversionesAccionesOtrasParticipaciones.MenorValorFiscal = content.R57["4245"].Menos2.InvAccOtro.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.DisposicionOtrosInstrumentosFinancieros.MenorValorFiscal = content.R57["4245"].Menos2.DispInstr.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.Otros.MenorValorFiscal = content.R57["4245"].Menos2.Otro.Ajust1;

    /**
     * Mayor valor fiscal Utilidad en la venta o enajenacion de activos, bienes peseidos menos dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesPlanta.MayorValorFiscal = content.R57["4245"].Menos2.PrpPlntEqp.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.PropiedadesInversion.MayorValorFiscal = content.R57["4245"].Menos2.PrpInv.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosBiologicos.MayorValorFiscal = content.R57["4245"].Menos2.ActBio.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MayorValorFiscal = content.R57["4245"].Menos2.ActNoCorr.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.ActivosIntangibles.MayorValorFiscal = content.R57["4245"].Menos2.ActInta.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.InversionesAccionesOtrasParticipaciones.MayorValorFiscal = content.R57["4245"].Menos2.InvAccOtro.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.DisposicionOtrosInstrumentosFinancieros.MayorValorFiscal = content.R57["4245"].Menos2.DispInstr.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMenos2Anos.Otros.MayorValorFiscal = content.R57["4245"].Menos2.Otro.Ajust3;

    /**
     * Valor contable Utilidad en la venta o enajenacion de activos, bienes peseidos mas dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesPlanta.ValorContable = content.R57["4245"].Mas2.PrpPlntEqp.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesInversion.ValorContable = content.R57["4245"].Mas2.PrpInv.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosBiologicos.ValorContable = content.R57["4245"].Mas2.ActBio.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R57["4245"].Mas2.ActNoCorr.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosIntangibles.ValorContable = content.R57["4245"].Mas2.ActInta.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.InversionesAccionesOtrasParticipaciones.ValorContable = content.R57["4245"].Mas2.InvAccOtro.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.DisposicionOtrosInstrumentosFinancieros.ValorContable = content.R57["4245"].Mas2.DispInstr.SaldCont;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.Otros.ValorContable = content.R57["4245"].Mas2.Otro.SaldCont;

    /**
     * Menor valor fiscal Utilidad en la venta o enajenacion de activos, bienes peseidos mas dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesPlanta.MenorValorFiscal = content.R57["4245"].Mas2.PrpPlntEqp.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesInversion.MenorValorFiscal = content.R57["4245"].Mas2.PrpInv.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosBiologicos.MenorValorFiscal = content.R57["4245"].Mas2.ActBio.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MenorValorFiscal = content.R57["4245"].Mas2.ActNoCorr.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosIntangibles.MenorValorFiscal = content.R57["4245"].Mas2.ActInta.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.InversionesAccionesOtrasParticipaciones.MenorValorFiscal = content.R57["4245"].Mas2.InvAccOtro.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.DisposicionOtrosInstrumentosFinancieros.MenorValorFiscal = content.R57["4245"].Mas2.DispInstr.Ajust1;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.Otros.MenorValorFiscal = content.R57["4245"].Mas2.Otro.Ajust1;

    /**
     * Mayor valor fiscal Utilidad en la venta o enajenacion de activos, bienes peseidos mas dos años
     */

    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesPlanta.MayorValorFiscal = content.R57["4245"].Mas2.PrpPlntEqp.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.PropiedadesInversion.MayorValorFiscal = content.R57["4245"].Mas2.PrpInv.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosBiologicos.MayorValorFiscal = content.R57["4245"].Mas2.ActBio.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MayorValorFiscal = content.R57["4245"].Mas2.ActNoCorr.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.ActivosIntangibles.MayorValorFiscal = content.R57["4245"].Mas2.ActInta.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.InversionesAccionesOtrasParticipaciones.MayorValorFiscal = content.R57["4245"].Mas2.InvAccOtro.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.DisposicionOtrosInstrumentosFinancieros.MayorValorFiscal = content.R57["4245"].Mas2.DispInstr.Ajust3;
    renLiq.Ingresos.UtilidadVentaEnajenacionActivosMas2Anos.Otros.MayorValorFiscal = content.R57["4245"].Mas2.Otro.Ajust3;

    /**
     * Valor contable ingresos por revision deteriroro del valor
     */

    renLiq.Ingresos.IngresosReversionDeterioroValor.Inventarios.ValorContable = content.R57["425035"].Inv.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.PropiedadesPlantaEquipo.ValorContable = content.R57["425035"].PrpPlntEqp.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.ActivosIntangibles.ValorContable = content.R57["425035"].ActInt.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.ActivosExploracionEvaluacionRecursosMinerales.ValorContable = content.R57["425035"].ActExplrRecMat.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.PropiedadesInversionMedidasCosto.ValorContable = content.R57["425035"].PrpInv.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R57["425035"].ActNoCorrVent.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.ActivosBiologicosMedidosCosto.ValorContable = content.R57["425035"].ActBio.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.BienesArteCultura.ValorContable = content.R57["425035"].BienArtCult.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.ActivosFinancieros.ValorContable = content.R57["425035"].ActFinan.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.CarteraCreditoOperacionesLeasing.ValorContable = content.R57["425035"].CartCred.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.OtrasInversionesMedidasCostoMetodoParticipacion.ValorContable = content.R57["425035"].OtraInv.SaldCont;
    renLiq.Ingresos.IngresosReversionDeterioroValor.OtrosDeterioros.ValorContable = content.R57["425035"].Otro.SaldCont;

    /**
     * Valor contable ingresos por revision provisiones
     */

    renLiq.Ingresos.IngresosReversionProvisiones.Garantias.ValorContable = content.R57["425036"].Garan.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.ContratosOnerosos.ValorContable = content.R57["425036"].ContOner.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.Litigios.ValorContable = content.R57["425036"].Litig.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.ReembolsosClientes.ValorContable = content.R57["425036"].Reembol.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.ReestructuracionesNegocios.ValorContable = content.R57["425036"].Reestruc.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.PasivosContingentesCombinacionNegocios.ValorContable = content.R57["425036"].Pasiv.SaldCont;
    renLiq.Ingresos.IngresosReversionProvisiones.Otros.ValorContable = content.R57["425036"].Otro.SaldCont;

    /**
     * Valor contable ingresos por revision de pasivos por beneficios a los empleados
     */

    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeCortoPlazo.ValorContable = content.R57["425037"].BenefCortoPlz.SaldCont;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeLargoPlazo.ValorContable = content.R57["425037"].BenefLargPlz.SaldCont;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPorTerminacionDelVinculoLaboral.ValorContable = content.R57["425037"].BenefEmplTemVinLab.SaldCont;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPostEmpleo.ValorContable = content.R57["425037"].BenefEmplPost.SaldCont;

    /**
     * Menor valor fiscal ingresos por revision de pasivos por beneficios a los empleados
     */

    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeCortoPlazo.MenorValorFiscal = content.R57["425037"].BenefCortoPlz.Ajust1;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeLargoPlazo.MenorValorFiscal = content.R57["425037"].BenefLargPlz.Ajust1;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPorTerminacionDelVinculoLaboral.MenorValorFiscal = content.R57["425037"].BenefEmplTemVinLab.Ajust1;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPostEmpleo.MenorValorFiscal = content.R57["425037"].BenefEmplPost.Ajust1;

    /**
     * Mayor valor fiscal ingresos por revision de pasivos por beneficios a los empleados
     */

    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeCortoPlazo.MayorValorFiscal = content.R57["425037"].BenefCortoPlz.Ajust3;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosDeLargoPlazo.MayorValorFiscal = content.R57["425037"].BenefLargPlz.Ajust3;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPorTerminacionDelVinculoLaboral.MayorValorFiscal = content.R57["425037"].BenefEmplTemVinLab.Ajust3;
    renLiq.Ingresos.IngresosReversionPasivosBeneficiosEmpleados.BeneficiosAEmpeladosPostEmpleo.MayorValorFiscal = content.R57["425037"].BenefEmplPost.Ajust3;

    /**
     * Valor contable otros ingresos
     */

    renLiq.Ingresos.OtrosIngresos.TransferenciasSubvencionesAyudasGubernamentales.ValorContable = content.R57["429502"].SaldCont;
    renLiq.Ingresos.OtrosIngresos.DonacionesAportacionesSimilares.ValorContable = content.R57["429503"].SaldCont;
    renLiq.Ingresos.OtrosIngresos.ReembolsosCompaniasSegurosIndemnizaciones.ValorContable = content.R57["4255"].ReembCompSeg.SaldCont;
    renLiq.Ingresos.OtrosIngresos.OtrasIndemnizaciones.ValorContable = content.R57["4255"].Otro.SaldCont;
    renLiq.Ingresos.OtrosIngresos.OtrasReversionesRecuperaciones.ValorContable = content.R57["429506"].SaldCont;
    renLiq.Ingresos.OtrosIngresos.Otros.ValorContable = content.R57["429507"].SaldCont + content.R57["4265"].SaldCont + content.R57["425050"].SaldCont + content.R57["429543"].SaldCont;

    /**
     * Menor valor fiscal otros ingresos
     */

    renLiq.Ingresos.OtrosIngresos.TransferenciasSubvencionesAyudasGubernamentales.MenorValorFiscal = content.R57["429502"].Ajust1;
    renLiq.Ingresos.OtrosIngresos.DonacionesAportacionesSimilares.MenorValorFiscal = content.R57["429503"].Ajust1;
    renLiq.Ingresos.OtrosIngresos.ReembolsosCompaniasSegurosIndemnizaciones.MenorValorFiscal = content.R57["4255"].ReembCompSeg.Ajust1;
    renLiq.Ingresos.OtrosIngresos.OtrasIndemnizaciones.MenorValorFiscal = content.R57["4255"].Otro.Ajust1;
    renLiq.Ingresos.OtrosIngresos.OtrasReversionesRecuperaciones.MenorValorFiscal = content.R57["429506"].Ajust1;
    renLiq.Ingresos.OtrosIngresos.Otros.MenorValorFiscal = content.R57["429507"].Ajust1 + content.R57["4265"].Ajust1 + content.R57["425050"].Ajust1 + content.R57["429543"].Ajust1;

    /**
     * Mayor valor fiscal otros ingresos
     */

    renLiq.Ingresos.OtrosIngresos.TransferenciasSubvencionesAyudasGubernamentales.MayorValorFiscal = content.R57["429502"].Ajust3;
    renLiq.Ingresos.OtrosIngresos.DonacionesAportacionesSimilares.MayorValorFiscal = content.R57["429503"].Ajust3;
    renLiq.Ingresos.OtrosIngresos.ReembolsosCompaniasSegurosIndemnizaciones.MayorValorFiscal = content.R57["4255"].ReembCompSeg.Ajust3;
    renLiq.Ingresos.OtrosIngresos.OtrasIndemnizaciones.MayorValorFiscal = content.R57["4255"].Otro.Ajust3;
    renLiq.Ingresos.OtrosIngresos.OtrasReversionesRecuperaciones.MayorValorFiscal = content.R57["429506"].Ajust3;
    renLiq.Ingresos.OtrosIngresos.Otros.MayorValorFiscal = content.R57["429507"].Ajust3 + content.R57["4265"].Ajust3 + content.R57["425050"].Ajust3 + content.R57["429543"].Ajust3;

    /**
     * Mayor valor fiscal adicion de ingresos
     */

    renLiq.Ingresos.AjustesFiscales.InteresesPresuntos.MayorValorFiscal = content.R48.IntPresSoc.Ajust3;

    /**
     * Valor fiscal Menos ingresos
     */

    renLiq.Ingresos.MenosIngresosNoConstitutivosRenta.ValorFiscal = content.R60.TotFisc;


    /**
     * ##############################################Costos##############################################
     */

    /**
     * Valor contable costos dematerias primas
     */

    renLiq.Costos.MateriasPrimasReventaBienes.CostossVentasCalculadoSistemaPermanente.ValorContable = content.R62["61"].CostVenSisPer.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioInicial.ValorContable = content.R62["61"].InvIniMatPri.Data.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.ComprasLocales.ValorContable = content.R62["61"].InvIniMatPri.CompLoc.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.Importaciones.ValorContable = content.R62["61"].InvIniMatPri.Imp.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioFinal.ValorContable = content.R62["61"].InvIniMatPri.InvFinMatPri.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioInicial.ValorContable = content.R62["61"].CostVentInv.InvIni.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.ComprasLocales.ValorContable = content.R62["61"].CostVentInv.CompLoc.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.Importaciones.ValorContable = content.R62["61"].CostVentInv.Import.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioFinal.ValorContable = content.R62["61"].CostVentInv.InvFin.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioInicial.ValorContable = content.R62["61"].InvIniTrbProc.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioFinal.ValorContable = content.R62["61"].AsisTec.InvFinTrbProc.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioInicial.ValorContable = content.R62["61"].InvIniProdTer.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioFinal.ValorContable = content.R62["61"].AsisTec.InvFinProdTer.SaldCont;
    renLiq.Costos.MateriasPrimasReventaBienes.CostosPrestacionServicios.ValorContable = content.R62["6140"].CostActRenExt.SaldCont;

    /**
     * Menor valor fiscal costos dematerias primas
     */

    renLiq.Costos.MateriasPrimasReventaBienes.CostossVentasCalculadoSistemaPermanente.MenorValorFiscal = content.R62["61"].CostVenSisPer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniMatPri.Data.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.ComprasLocales.MenorValorFiscal = content.R62["61"].InvIniMatPri.CompLoc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.Importaciones.MenorValorFiscal = content.R62["61"].InvIniMatPri.Imp.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioFinal.MenorValorFiscal = content.R62["61"].InvIniMatPri.InvFinMatPri.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioInicial.MenorValorFiscal = content.R62["61"].CostVentInv.InvIni.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.ComprasLocales.MenorValorFiscal = content.R62["61"].CostVentInv.CompLoc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.Importaciones.MenorValorFiscal = content.R62["61"].CostVentInv.Import.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioFinal.MenorValorFiscal = content.R62["61"].CostVentInv.InvFin.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniTrbProc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioFinal.MenorValorFiscal = content.R62["61"].AsisTec.InvFinTrbProc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniProdTer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioFinal.MenorValorFiscal = content.R62["61"].AsisTec.InvFinProdTer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostosPrestacionServicios.MenorValorFiscal = content.R62["6140"].CostActRenExt.Ajust3;

    /**
     * Mayor valor fiscal costos dematerias primas
     */

    renLiq.Costos.MateriasPrimasReventaBienes.CostossVentasCalculadoSistemaPermanente.MayorValorFiscal = content.R62["61"].CostVenSisPer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniMatPri.Data.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.ComprasLocales.MayorValorFiscal = content.R62["61"].InvIniMatPri.CompLoc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.Importaciones.MayorValorFiscal = content.R62["61"].InvIniMatPri.Imp.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioFinal.MayorValorFiscal = content.R62["61"].InvIniMatPri.InvFinMatPri.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioInicial.MayorValorFiscal = content.R62["61"].CostVentInv.InvIni.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.ComprasLocales.MayorValorFiscal = content.R62["61"].CostVentInv.CompLoc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.Importaciones.MayorValorFiscal = content.R62["61"].CostVentInv.Import.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioFinal.MayorValorFiscal = content.R62["61"].CostVentInv.InvFin.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniTrbProc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioFinal.MayorValorFiscal = content.R62["61"].AsisTec.InvFinTrbProc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniProdTer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioFinal.MayorValorFiscal = content.R62["61"].AsisTec.InvFinProdTer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostosPrestacionServicios.MayorValorFiscal = content.R62["6140"].CostActRenExt.Ajust1;


    /**
     * Valor contable mano de obra
     */

    renLiq.Costos.ManoObra.CortoPlazo.ValorContable = content.R62["61"].CostManoObr.CortoPlz.SaldCont;
    renLiq.Costos.ManoObra.LargoPlazo.ValorContable = content.R62["61"].CostManoObr.LargoPlz.SaldCont;
    renLiq.Costos.ManoObra.PostTerminacionVinculoLaboral.ValorContable = content.R62["61"].CostManoObr.TermVincLab.SaldCont;
    renLiq.Costos.ManoObra.PostEmpleo.ValorContable = content.R62["61"].CostManoObr.PostEmpl.SaldCont;

    /**
     * Menor valor fiscal mano de obra
     */

    renLiq.Costos.ManoObra.CortoPlazo.MenorValorFiscal = content.R62["61"].CostManoObr.CortoPlz.Ajust3;
    renLiq.Costos.ManoObra.LargoPlazo.MenorValorFiscal = content.R62["61"].CostManoObr.LargoPlz.Ajust3;
    renLiq.Costos.ManoObra.PostTerminacionVinculoLaboral.MenorValorFiscal = content.R62["61"].CostManoObr.TermVincLab.Ajust3;
    renLiq.Costos.ManoObra.PostEmpleo.MenorValorFiscal = content.R62["61"].CostManoObr.PostEmpl.Ajust3;

    /**
     * Mayor valor fiscal mano de obra
     */

    renLiq.Costos.ManoObra.CortoPlazo.MayorValorFiscal = content.R62["61"].CostManoObr.CortoPlz.Ajust1;
    renLiq.Costos.ManoObra.LargoPlazo.MayorValorFiscal = content.R62["61"].CostManoObr.LargoPlz.Ajust1;
    renLiq.Costos.ManoObra.PostTerminacionVinculoLaboral.MayorValorFiscal = content.R62["61"].CostManoObr.TermVincLab.Ajust1;
    renLiq.Costos.ManoObra.PostEmpleo.MayorValorFiscal = content.R62["61"].CostManoObr.PostEmpl.Ajust1;

    /**
     * Valor contable depreciaciones amortizaciones y deterioro
     */

    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.ValorContable = content.R62["61"].CostDepr.DeprPrpPltEqu.Cost.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.AjusteAcumunlado.ValorContable = content.R62["61"].CostDepr.DeprPrpPltEqu.AjusAcum.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.ValorContable = content.R62["61"].CostDepr.DeprPrpInv.Cost.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.AjusteAcumunlado.ValorContable = content.R62["61"].CostDepr.DeprPrpInv.AjusAcum.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.Costo.ValorContable = content.R62["61"].CostDepr.DeprActBio.Cost.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.AjusteAcumunlado.ValorContable = content.R62["61"].CostDepr.DeprActBio.AjusAcum.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.ValorContable = content.R62["61"].CostDepr.DepreActInt.Cost.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.AjusteAcumunlado.ValorContable = content.R62["61"].CostDepr.DepreActInt.AjusAcum.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.Costo.ValorContable = content.R62["61"].CostDepr.Otro.Cost.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.AjusteAcumunlado.ValorContable = content.R62["61"].CostDepr.Otro.AjusAcum.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.ValorContable = content.R62["61"].Deterioros.Inv.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.ValorContable = content.R62["61"].Deterioros.PrpPltEqu.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.ValorContable = content.R62["61"].Deterioros.ActInt.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.ValorContable = content.R62["61"].Deterioros.ActExp.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.ValorContable = content.R62["61"].Deterioros.PrpInver.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R62["61"].Deterioros.ActNoCorr.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.ValorContable = content.R62["61"].Deterioros.ActBio.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.ValorContable = content.R62["61"].Deterioros.BienArt.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.ValorContable = content.R62["61"].Deterioros.ActFin.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.ValorContable = content.R62["61"].Deterioros.CartCred.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.ValorContable = content.R62["61"].Deterioros.OtrasInv.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.ValorContable = content.R62["61"].Deterioros.DerUso.SaldCont;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.ValorContable = content.R62["61"].Deterioros.Otros.SaldCont;

    /**
     * Menor valor fiscal depreciaciones amortizaciones y deterioro
     */

    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprActBio.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DepreActInt.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.Costo.MenorValorFiscal = content.R62["61"].CostDepr.Otro.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MenorValorFiscal = content.R62["61"].Deterioros.CartCred.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MenorValorFiscal = content.R62["61"].Deterioros.Otros.Ajust3;

    /**
     * Mayor valor fiscal depreciaciones amortizaciones y deterioro
     */

    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprActBio.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DepreActInt.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.Costo.MayorValorFiscal = content.R62["61"].CostDepr.Otro.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MayorValorFiscal = content.R62["61"].Deterioros.CartCred.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MayorValorFiscal = content.R62["61"].Deterioros.Otros.Ajust1;

    /**
     * Valor contable otros costos
     */
    
    renLiq.Costos.OtrosCostos.Arrendamientos.ValorContable = content.R62["61"].Otros.Arren.SaldCont;
    renLiq.Costos.OtrosCostos.Seguros.ValorContable = content.R62["61"].Otros.Seguro.SaldCont;
    renLiq.Costos.OtrosCostos.Servicios.ValorContable = content.R62["61"].Otros.Serv.SaldCont;
    renLiq.Costos.OtrosCostos.Honorarios.ValorContable = content.R62["61"].Otros.Honor.SaldCont;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.ValorContable = content.R62["61"].ServTecn.VinEco.SaldCont;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R62["61"].ServTecn.JurisNoCoop.SaldCont;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.ValorContable = content.R62["61"].ServTecn.NoVin.SaldCont;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.ValorContable = content.R62["61"].AsisTec.VinEco.SaldCont;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R62["61"].AsisTec.JurisNoCoop.SaldCont;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.ValorContable = content.R62["61"].AsisTec.NoVin.SaldCont;
    renLiq.Costos.OtrosCostos.OtrosConceptosReconocidosCostos.ValorContable = content.R62["61"].AsisTec.Otros.SaldCont;

    /**
     * Menor valor fiscal otros costos
     */

    renLiq.Costos.OtrosCostos.Arrendamientos.MenorValorFiscal = content.R62["61"].Otros.Arren.Ajust3;
    renLiq.Costos.OtrosCostos.Seguros.MenorValorFiscal = content.R62["61"].Otros.Seguro.Ajust3;
    renLiq.Costos.OtrosCostos.Servicios.MenorValorFiscal = content.R62["61"].Otros.Serv.Ajust3;
    renLiq.Costos.OtrosCostos.Honorarios.MenorValorFiscal = content.R62["61"].Otros.Honor.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MenorValorFiscal = content.R62["61"].ServTecn.VinEco.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R62["61"].ServTecn.JurisNoCoop.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MenorValorFiscal = content.R62["61"].ServTecn.NoVin.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscal = content.R62["61"].AsisTec.VinEco.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R62["61"].AsisTec.JurisNoCoop.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MenorValorFiscal = content.R62["61"].AsisTec.NoVin.Ajust3;
    renLiq.Costos.OtrosCostos.OtrosConceptosReconocidosCostos.MenorValorFiscal = content.R62["61"].AsisTec.Otros.Ajust3;

    /**
     * Mayor valor fiscal otros costos
     */

    renLiq.Costos.OtrosCostos.Arrendamientos.MayorValorFiscal = content.R62["61"].Otros.Arren.Ajust1;
    renLiq.Costos.OtrosCostos.Seguros.MayorValorFiscal = content.R62["61"].Otros.Seguro.Ajust1;
    renLiq.Costos.OtrosCostos.Servicios.MayorValorFiscal = content.R62["61"].Otros.Serv.Ajust1;
    renLiq.Costos.OtrosCostos.Honorarios.MayorValorFiscal = content.R62["61"].Otros.Honor.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MayorValorFiscal = content.R62["61"].ServTecn.VinEco.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R62["61"].ServTecn.JurisNoCoop.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MayorValorFiscal = content.R62["61"].ServTecn.NoVin.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscal = content.R62["61"].AsisTec.VinEco.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R62["61"].AsisTec.JurisNoCoop.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MayorValorFiscal = content.R62["61"].AsisTec.NoVin.Ajust1;
    renLiq.Costos.OtrosCostos.OtrosConceptosReconocidosCostos.MayorValorFiscal = content.R62["61"].AsisTec.Otros.Ajust1;
    renLiq.Costos.OtrosCostos.OtrosConceptosFiscalesNoReconocidos.MayorValorFiscal = content.R62["6140"].CostFiscActFij.Ajust1;

    /**
     * ##############################################Gastos##############################################
     */

    /**
     * Valor contable gastos de administracion, mano de obra
     */

    renLiq.Gastos.Administracion.ManoObra.CortoPlazo.ValorContable = content.R63["5105"].SalOtro.SaldCont + content.R63["5105"].AporEPS.SaldCont + content.R63["5105"].AporARL.SaldCont + content.R63["5105"].AporFondPen.SaldCont + content.R63["5105"].AporSENA.SaldCont + content.R63["5105"].AporICBF.DeprePrpPltEqui.Cost.SaldCont + content.R63["5105"].AporICBF.DeprePrpPltEqui.AporCajaComp.SaldCont;

    /**
     * Menor valor fiscal gastos de administracion, mano de obra
     */

    renLiq.Gastos.Administracion.ManoObra.CortoPlazo.MenorValorFiscal = content.R63["5105"].SalOtro.Ajust3 + content.R63["5105"].AporEPS.Ajust3 + content.R63["5105"].AporARL.Ajust3 + content.R63["5105"].AporFondPen.Ajust3 + content.R63["5105"].AporSENA.Ajust3 + content.R63["5105"].AporICBF.DeprePrpPltEqui.Cost.Ajust3 + content.R63["5105"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust3;

    /**
     * Mayor valor fiscal gastos de administracion, mano de obra
     */

    renLiq.Gastos.Administracion.ManoObra.CortoPlazo.MayorValorFiscal = content.R63["5105"].SalOtro.Ajust1 + content.R63["5105"].AporEPS.Ajust1 + content.R63["5105"].AporARL.Ajust1 + content.R63["5105"].AporFondPen.Ajust1 + content.R63["5105"].AporSENA.Ajust1 + content.R63["5105"].AporICBF.DeprePrpPltEqui.Cost.Ajust1 + content.R63["5105"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust1;

    /**
     * Valor contable gastos de administracion, otros gastos de adminisracion
     */

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.ValorContable = content.R63["5115"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ArrendamientosOperativos.ValorContable = content.R63["5120"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ContribucionesYAfiliaciones.ValorContable = content.R63["5125"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Honorarios.ValorContable = content.R63["5110"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Seguros.ValorContable = content.R63["5130"].SaldCont;

    //Servicios Administrativos

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.VinculadosEconomicos.ValorContable = content.R63["5135"].ServAdmVinEco.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R63["5135"].ServAdmVinTer.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.NoVinculados.ValorContable = content.R63["5135"].ServAdmNoVin.SaldCont;

    //Regalias

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.VinculadosEconomicos.ValorContable = content.R63["5136"].VinEco.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R63["5136"].TerJurNoCoop.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.NoVinculados.ValorContable = content.R63["5136"].NoVin.SaldCont;

    //Asistencia Tecnica

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.VinculadosEconomicos.ValorContable = content.R63["5135"].ServTecVinEco.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R63["5135"].ServTecVinTer.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.NoVinculados.ValorContable = content.R63["5135"].ServTecNoVin.SaldCont;

    //----------------

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosServicios.ValorContable = content.R63["5135"].Otro.SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.InvestigacionYDesarrollo.ValorContable = content.R63["5137"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.GastosLegales.ValorContable = content.R63["5140"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ReparacionMantenimientoAdecuacionInstalaciones.ValorContable = content.R63["5145"].SaldCont + content.R63["5150"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Transporte.ValorContable = content.R63["5155"].SaldCont;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosGastos.ValorContable = content.R63["5195"].SaldCont;

    /**
     * Menor Valor Fiscal gastos de administracion, otros gastos de adminisracion
     */

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MenorValorFiscal = content.R63["5115"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ArrendamientosOperativos.MenorValorFiscal = content.R63["5120"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ContribucionesYAfiliaciones.MenorValorFiscal = content.R63["5125"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Honorarios.MenorValorFiscal = content.R63["5110"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Seguros.MenorValorFiscal = content.R63["5130"].Ajust3;

    //Servicios Administrativos

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MenorValorFiscal = content.R63["5135"].ServAdmVinEco.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R63["5135"].ServAdmVinTer.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.NoVinculados.MenorValorFiscal = content.R63["5135"].ServAdmNoVin.Ajust3;

    //Regalias

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.VinculadosEconomicos.MenorValorFiscal = content.R63["5136"].VinEco.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R63["5136"].TerJurNoCoop.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.NoVinculados.MenorValorFiscal = content.R63["5136"].NoVin.Ajust3;

    //Asistencia Tecnica

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscal = content.R63["5135"].ServTecVinEco.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R63["5135"].ServTecVinTer.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.NoVinculados.MenorValorFiscal = content.R63["5135"].ServTecNoVin.Ajust3;

    //----------------

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosServicios.MenorValorFiscal = content.R63["5135"].Otro.Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.InvestigacionYDesarrollo.MenorValorFiscal = content.R63["5137"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.GastosLegales.MenorValorFiscal = content.R63["5140"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ReparacionMantenimientoAdecuacionInstalaciones.MenorValorFiscal = content.R63["5145"].Ajust3 + content.R63["5150"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Transporte.MenorValorFiscal = content.R63["5155"].Ajust3;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosGastos.MenorValorFiscal = content.R63["5195"].Ajust3;

    /**
     * Mayor Valor Fiscal gastos de administracion, otros gastos de adminisracion
     */

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MayorValorFiscal = content.R63["5115"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ArrendamientosOperativos.MayorValorFiscal = content.R63["5120"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ContribucionesYAfiliaciones.MayorValorFiscal = content.R63["5125"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Honorarios.MayorValorFiscal = content.R63["5110"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Seguros.MayorValorFiscal = content.R63["5130"].Ajust1;

    //Servicios Administrativos

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.VinculadosEconomicos.MayorValorFiscal = content.R63["5135"].ServAdmVinEco.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R63["5135"].ServAdmVinTer.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ServiciosAdministrativos.NoVinculados.MayorValorFiscal = content.R63["5135"].ServAdmNoVin.Ajust1;

    //Regalias

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.VinculadosEconomicos.MayorValorFiscal = content.R63["5136"].VinEco.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R63["5136"].TerJurNoCoop.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Regalias.NoVinculados.MayorValorFiscal = content.R63["5136"].NoVin.Ajust1;

    //Asistencia Tecnica

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscal = content.R63["5135"].ServTecVinEco.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R63["5135"].ServTecVinTer.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.AsistenciaTecnica.NoVinculados.MayorValorFiscal = content.R63["5135"].ServTecNoVin.Ajust1;

    //----------------

    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosServicios.MayorValorFiscal = content.R63["5135"].Otro.Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.InvestigacionYDesarrollo.MayorValorFiscal = content.R63["5137"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.GastosLegales.MayorValorFiscal = content.R63["5140"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.ReparacionMantenimientoAdecuacionInstalaciones.MayorValorFiscal = content.R63["5145"].Ajust1 + content.R63["5150"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.Transporte.MayorValorFiscal = content.R63["5155"].Ajust1;
    renLiq.Gastos.Administracion.OtrosGastosAdministracion.OtrosGastos.MayorValorFiscal = content.R63["5195"].Ajust1;

    /**
     * Valor contable gastos de administracion, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.ValorContable = content.R63["5160"].DeprePrpPltEqui.Cost.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.AjusteAcumunlado.ValorContable = content.R63["5160"].DeprePrpPltEqui.AjusAcum.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.ValorContable = content.R63["5160"].DeprePropInv.Cost.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.AjusteAcumunlado.ValorContable = content.R63["5160"].DeprePropInv.AjusAcum.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.ValorContable = content.R63["5160"].DepreOtro.Cost.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.AjusteAcumunlado.ValorContable = content.R63["5160"].DepreOtro.AjusAcum.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.ValorContable = content.R63["5166"].AmortActInt.Cost.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.AjusteAcumunlado.ValorContable = content.R63["5166"].AmortActInt.AjusAcum.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.ValorContable = content.R63["5166"].Otros.Cost.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.AjusteAcumunlado.ValorContable = content.R63["5166"].Otros.AjusAcum.SaldCont;

    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.ValorContable = content.R63["5199"].Inv.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.ValorContable = content.R63["5199"].PrpPltEqui.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.ValorContable = content.R63["5199"].ActInt.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.ValorContable = content.R63["5199"].ActExplEva.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.ValorContable = content.R63["5199"].PropInv.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R63["5199"].ActNoCorr.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.ValorContable = content.R63["5199"].BienArt.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.ValorContable = content.R63["5199"].ActBio.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.ValorContable = content.R63["5199"].ActFin.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.ValorContable = content.R63["5199"].CartCred.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.ValorContable = content.R63["5199"].OtroInv.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.ValorContable = content.R63["5199"].DerUso.SaldCont;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.ValorContable = content.R63["5199"].Otro.SaldCont;

    /**
     * Menor valor fiscal gastos de administracion, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MenorValorFiscal = content.R63["5160"].DeprePrpPltEqui.Cost.Ajust3;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MenorValorFiscal = content.R63["5160"].DeprePropInv.Cost.Ajust3;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.MenorValorFiscal = content.R63["5160"].DepreOtro.Cost.Ajust3;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MenorValorFiscal = content.R63["5166"].AmortActInt.Cost.Ajust3;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.MenorValorFiscal = content.R63["5166"].Otros.Cost.Ajust3;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MenorValorFiscal = content.R63["5199"].CartCred.Ajust3;

    /**
     * Mayor valor fiscal gastos de administracion, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MayorValorFiscal = content.R63["5160"].DeprePrpPltEqui.Cost.Ajust1;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MayorValorFiscal = content.R63["5160"].DeprePropInv.Cost.Ajust1;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.MayorValorFiscal = content.R63["5160"].DepreOtro.Cost.Ajust1;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MayorValorFiscal = content.R63["5166"].AmortActInt.Cost.Ajust1;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.MayorValorFiscal = content.R63["5166"].Otros.Cost.Ajust1;
    renLiq.Gastos.Administracion.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MayorValorFiscal = content.R63["5199"].CartCred.Ajust1;

    /**
     * Valor contable gastos de distribucion y ventas, mano de obra
     */

    renLiq.Gastos.GastosDistribucionVentas.ManoObra.CortoPlazo.ValorContable = content.R64["5205"].SalOtro.SaldCont + content.R64["5205"].AporEPS.SaldCont + content.R64["5205"].AporARL.SaldCont + content.R64["5205"].AporFondPen.SaldCont + content.R64["5205"].AporSENA.SaldCont + content.R64["5205"].AporICBF.DeprePrpPltEqui.Cost.SaldCont + content.R64["5205"].AporICBF.DeprePrpPltEqui.AporCajaComp.SaldCont;

    /**
     * Menor valor fiscal gastos de distribucion y ventas, mano de obra
     */

    renLiq.Gastos.GastosDistribucionVentas.ManoObra.CortoPlazo.MenorValorFiscal = content.R64["5205"].SalOtro.Ajust3 + content.R64["5205"].AporEPS.Ajust3 + content.R64["5205"].AporARL.Ajust3 + content.R64["5205"].AporFondPen.Ajust3 + content.R64["5205"].AporSENA.Ajust3 + content.R64["5205"].AporICBF.DeprePrpPltEqui.Cost.Ajust3 + content.R64["5205"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust3;

    /**
     * Mayor valor fiscal gastos de distribucion y ventas, mano de obra
     */

    renLiq.Gastos.GastosDistribucionVentas.ManoObra.CortoPlazo.MayorValorFiscal = content.R64["5205"].SalOtro.Ajust1 + content.R64["5205"].AporEPS.Ajust1 + content.R64["5205"].AporARL.Ajust1 + content.R64["5205"].AporFondPen.Ajust1 + content.R64["5205"].AporSENA.Ajust1 + content.R64["5205"].AporICBF.DeprePrpPltEqui.Cost.Ajust1 + content.R64["5205"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust1;


    /**
     * Valor contable gastos de distribucion y ventas, otros gastos de distribucion y ventas
     */

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.ValorContable = content.R64["5215"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ArrendamientosOperativos.ValorContable = content.R64["5220"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ContribucionesYAfiliaciones.ValorContable = content.R64["5225"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Honorarios.ValorContable = content.R64["5210"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Seguros.ValorContable = content.R64["5230"].SaldCont;

    //Servicios Administrativos

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.VinculadosEconomicos.ValorContable = content.R64["5235"].ServAdmVinEco.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R64["5235"].ServAdmVinTer.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.NoVinculados.ValorContable = content.R64["5235"].ServAdmNoVin.SaldCont;

    //Regalias

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.VinculadosEconomicos.ValorContable = content.R64["5236"].VinEco.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R64["5236"].TerJurNoCoop.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.NoVinculados.ValorContable = content.R64["5236"].NoVin.SaldCont;

    //Asistencia Tecnica

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.VinculadosEconomicos.ValorContable = content.R64["5235"].ServTecVinEco.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.ValorContable = content.R64["5235"].ServTecVinTer.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.NoVinculados.ValorContable = content.R64["5235"].ServTecNoVin.SaldCont;

    //----------------

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosServicios.ValorContable = content.R64["5235"].Otro.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.InvestigacionYDesarrollo.ValorContable = content.R64["5241"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.GastosLegales.ValorContable = content.R64["5240"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ReparacionMantenimientoAdecuacionInstalaciones.ValorContable = content.R64["5245"].SaldCont + content.R64["5250"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Transporte.ValorContable = content.R64["5255"].SaldCont;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ConstitucionReservas.ValorContable = content.R64["5237"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.LiquidacionSiniestros.ValorContable = content.R64["5238"].SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.PrimasReaseguros.ValorContable = content.R64["5239"].SaldCont;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosGastos.ValorContable = content.R64["5295"].SaldCont;

    /**
     * Menor Valor Fiscal gastos de Gastos Ventas, otros gastos de adminisracion
     */

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MenorValorFiscal = content.R64["5215"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ArrendamientosOperativos.MenorValorFiscal = content.R64["5220"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ContribucionesYAfiliaciones.MenorValorFiscal = content.R64["5225"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Honorarios.MenorValorFiscal = content.R64["5210"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Seguros.MenorValorFiscal = content.R64["5230"].Ajust3;

    //Servicios Administrativos

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.VinculadosEconomicos.MenorValorFiscal = content.R64["5235"].ServAdmVinEco.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R64["5235"].ServAdmVinTer.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.NoVinculados.MenorValorFiscal = content.R64["5235"].ServAdmNoVin.Ajust3;

    //Regalias

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.VinculadosEconomicos.MenorValorFiscal = content.R64["5236"].VinEco.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R64["5236"].TerJurNoCoop.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.NoVinculados.MenorValorFiscal = content.R64["5236"].NoVin.Ajust3;

    //Asistencia Tecnica

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscal = content.R64["5235"].ServTecVinEco.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R64["5235"].ServTecVinTer.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.NoVinculados.MenorValorFiscal = content.R64["5235"].ServTecNoVin.Ajust3;

    //----------------

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosServicios.MenorValorFiscal = content.R64["5235"].Otro.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.InvestigacionYDesarrollo.MenorValorFiscal = content.R64["5237"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.GastosLegales.MenorValorFiscal = content.R64["5240"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ReparacionMantenimientoAdecuacionInstalaciones.MenorValorFiscal = content.R64["5245"].Ajust3 + content.R64["5250"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Transporte.MenorValorFiscal = content.R64["5255"].Ajust3;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ConstitucionReservas.MenorValorFiscal = content.R64["5237"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.LiquidacionSiniestros.MenorValorFiscal = content.R64["5238"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.PrimasReaseguros.MenorValorFiscal = content.R64["5239"].Ajust3;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosGastos.MenorValorFiscal = content.R64["5295"].Ajust3;

    /**
     * Mayor Valor Fiscal gastos de administracion, otros gastos de adminisracion
     */

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ImpuestosDistintosAlImpuestosDeRentaYComplementarios.MayorValorFiscal = content.R64["5215"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ArrendamientosOperativos.MayorValorFiscal = content.R64["5220"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ContribucionesYAfiliaciones.MayorValorFiscal = content.R64["5225"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Honorarios.MayorValorFiscal = content.R64["5210"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Seguros.MayorValorFiscal = content.R64["5230"].Ajust1;

    //Servicios Administrativos

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.VinculadosEconomicos.MayorValorFiscal = content.R64["5235"].ServAdmVinEco.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R64["5235"].ServAdmVinTer.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ServiciosAdministrativos.NoVinculados.MayorValorFiscal = content.R64["5235"].ServAdmNoVin.Ajust1;

    //Regalias

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.VinculadosEconomicos.MayorValorFiscal = content.R64["5236"].VinEco.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R64["5236"].TerJurNoCoop.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Regalias.NoVinculados.MayorValorFiscal = content.R64["5236"].NoVin.Ajust1;

    //Asistencia Tecnica

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscal = content.R64["5235"].ServTecVinEco.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.v = content.R64["5235"].ServTecVinTer.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.AsistenciaTecnica.NoVinculados.MayorValorFiscal = content.R64["5235"].ServTecNoVin.Ajust1;

    //----------------

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosServicios.MayorValorFiscal = content.R64["5235"].Otro.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.InvestigacionYDesarrollo.MayorValorFiscal = content.R64["5237"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.GastosLegales.MayorValorFiscal = content.R64["5240"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ReparacionMantenimientoAdecuacionInstalaciones.MayorValorFiscal = content.R64["5245"].Ajust1 + content.R64["5250"].Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.Transporte.MayorValorFiscal = content.R64["5255"].Ajust1;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.ConstitucionReservas.MayorValorFiscal = content.R64["5237"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.LiquidacionSiniestros.MayorValorFiscal = content.R64["5238"].Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.PrimasReaseguros.MayorValorFiscal = content.R64["5239"].Ajust3;

    renLiq.Gastos.GastosDistribucionVentas.OtrosGastosDistribucion.OtrosGastos.MayorValorFiscal = content.R64["5295"].Ajust1;

    /**
     * Valor contable gastos de distribucion y ventas, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.ValorContable = content.R64["5260"].DeprePrpPltEqui.Cost.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.AjusteAcumunlado.ValorContable = content.R64["5260"].DeprePrpPltEqui.AjusAcum.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.ValorContable = content.R64["5260"].DeprePropInv.Cost.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.AjusteAcumunlado.ValorContable = content.R64["5260"].DeprePropInv.AjusAcum.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.ValorContable = content.R64["5260"].DepreOtro.Cost.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.AjusteAcumunlado.ValorContable = content.R64["5260"].DepreOtro.AjusAcum.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.ValorContable = content.R64["5266"].AmortActInt.Cost.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.AjusteAcumunlado.ValorContable = content.R64["5266"].AmortActInt.AjusAcum.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.ValorContable = content.R64["5266"].Otros.Cost.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.AjusteAcumunlado.ValorContable = content.R64["5266"].Otros.AjusAcum.SaldCont;

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.ValorContable = content.R64["5299"].Inv.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.ValorContable = content.R64["5299"].PrpPltEqui.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.ValorContable = content.R64["5299"].ActInt.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.ValorContable = content.R64["5299"].ActExplEva.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.ValorContable = content.R64["5299"].PropInv.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.ValorContable = content.R64["5299"].ActNoCorr.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.ValorContable = content.R64["5299"].BienArt.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.ValorContable = content.R64["5299"].ActBio.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.ValorContable = content.R64["5299"].ActFin.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.ValorContable = content.R64["5299"].CartCred.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.ValorContable = content.R64["5299"].OtroInv.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.ValorContable = content.R64["5299"].DerUso.SaldCont;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.ValorContable = content.R64["5299"].Otro.SaldCont;

    /**
     * Menor valor fiscal gastos de distribucion y ventas, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MenorValorFiscal = content.R64["5260"].DeprePrpPltEqui.Cost.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MenorValorFiscal = content.R64["5260"].DeprePropInv.Cost.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.MenorValorFiscal = content.R64["5260"].DepreOtro.Cost.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MenorValorFiscal = content.R64["5266"].AmortActInt.Cost.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.MenorValorFiscal = content.R64["5266"].Otros.Cost.Ajust3;

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.MenorValorFiscal = content.R64["5299"].Inv.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.MenorValorFiscal = content.R64["5299"].PrpPltEqui.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.MenorValorFiscal = content.R64["5299"].ActInt.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.MenorValorFiscal = content.R64["5299"].ActExplEva.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.MenorValorFiscal = content.R64["5299"].PropInv.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MenorValorFiscal = content.R64["5299"].ActNoCorr.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.MenorValorFiscal = content.R64["5299"].BienArt.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.MenorValorFiscal = content.R64["5299"].ActBio.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.MenorValorFiscal = content.R64["5299"].ActFin.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MenorValorFiscal = content.R64["5299"].CartCred.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.MenorValorFiscal = content.R64["5299"].OtroInv.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.MenorValorFiscal = content.R64["5299"].DerUso.Ajust3;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MenorValorFiscal = content.R64["5299"].Otro.Ajust3;

    /**
     * Mayor valor fiscal gastos de distribucion y ventas, depreciasiones amortizaciones y deterioro
     */

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MayorValorFiscal = content.R64["5260"].DeprePrpPltEqui.Cost.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MayorValorFiscal = content.R64["5260"].DeprePropInv.Cost.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasDepreciaciones.Costo.MayorValorFiscal = content.R64["5260"].DepreOtro.Cost.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MayorValorFiscal = content.R64["5266"].AmortActInt.Cost.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.OtrasAmortizaciones.Costo.MayorValorFiscal = content.R64["5266"].Otros.Cost.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MayorValorFiscal = content.R64["5266"].CartCred.Ajust1;

    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.MayorValorFiscal = content.R64["5299"].Inv.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.MayorValorFiscal = content.R64["5299"].PrpPltEqui.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.MayorValorFiscal = content.R64["5299"].ActInt.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.MayorValorFiscal = content.R64["5299"].ActExplEva.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.MayorValorFiscal = content.R64["5299"].PropInv.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MayorValorFiscal = content.R64["5299"].ActNoCorr.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.MayorValorFiscal = content.R64["5299"].BienArt.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.MayorValorFiscal = content.R64["5299"].ActBio.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.MayorValorFiscal = content.R64["5299"].ActFin.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MayorValorFiscal = content.R64["5299"].CartCred.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.MayorValorFiscal = content.R64["5299"].OtroInv.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.MayorValorFiscal = content.R64["5299"].DerUso.Ajust1;
    renLiq.Gastos.GastosDistribucionVentas.DepreciacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MayorValorFiscal = content.R64["5299"].Otro.Ajust1;

    /**
     * Valor contable gastos finacieros
     */

    renLiq.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.ValorContable = content.R65["5305"].IntDevSecFin.SaldCont;
    renLiq.Gastos.GastosFinancieros.InteresesDevengadosPrestamosTerceros.ValorContable = content.R65["5305"].IntDevPrestTer.SaldCont;
    renLiq.Gastos.GastosFinancieros.IntrumentosFinancierosMedidos.ValorContable = content.R65["5305"].InstFin.SaldCont;
    renLiq.Gastos.GastosFinancieros.CostosTransaccion.ValorContable = content.R65["5305"].CstTrans.SaldCont;
    renLiq.Gastos.GastosFinancieros.DiferenciaCambio.ValorContable = content.R65["5305"].DifCamb.SaldCont;
    renLiq.Gastos.GastosFinancieros.InteresesImplicitos.ValorContable = content.R65["5305"].IntImpl.SaldCont;
    renLiq.Gastos.GastosFinancieros.ActualizacionProvisiones.ValorContable = content.R65["5305"].ActProvRecValPres.SaldCont;
    renLiq.Gastos.GastosFinancieros.AccionesPreferenciales.ValorContable = content.R65["5305"].IntAccPref.SaldCont;
    renLiq.Gastos.GastosFinancieros.OtrosGastosFinancieros.ValorContable = content.R65["5305"].Otro.SaldCont + content.R65["5310"].IntDIANSegSoc.SaldCont;

    /**
     * Menor valor fiscal gastos finacieros
     */

    renLiq.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.MenorValorFiscal = content.R65["5305"].IntDevSecFin.Ajust3;
    renLiq.Gastos.GastosFinancieros.InteresesDevengadosPrestamosTerceros.MenorValorFiscal = content.R65["5305"].IntDevPrestTer.Ajust3;
    renLiq.Gastos.GastosFinancieros.CostosTransaccion.MenorValorFiscal = content.R65["5305"].CstTrans.Ajust3;
    renLiq.Gastos.GastosFinancieros.DiferenciaCambio.MenorValorFiscal = content.R65["5305"].DifCamb.Ajust3;
    renLiq.Gastos.GastosFinancieros.AccionesPreferenciales.MenorValorFiscal = content.R65["5305"].IntAccPref.Ajust3;
    renLiq.Gastos.GastosFinancieros.OtrosGastosFinancieros.MenorValorFiscal = content.R65["5305"].Otro.Ajust3 + content.R65["5310"].IntDIANSegSoc.Ajust3;

    /**
     * Mayor valor fiscal gastos finacieros
     */

    renLiq.Gastos.GastosFinancieros.InteresesDevengadosSectorFinanciero.MayorValorFiscal = content.R65["5305"].IntDevSecFin.Ajust1;
    renLiq.Gastos.GastosFinancieros.InteresesDevengadosPrestamosTerceros.MayorValorFiscal = content.R65["5305"].IntDevPrestTer.Ajust1;
    renLiq.Gastos.GastosFinancieros.CostosTransaccion.MayorValorFiscal = content.R65["5305"].CstTrans.Ajust1;
    renLiq.Gastos.GastosFinancieros.DiferenciaCambio.MayorValorFiscal = content.R65["5305"].DifCamb.Ajust1;
    renLiq.Gastos.GastosFinancieros.AccionesPreferenciales.MayorValorFiscal = content.R65["5305"].IntAccPref.Ajust1;
    renLiq.Gastos.GastosFinancieros.OtrosGastosFinancieros.MayorValorFiscal = content.R65["5305"].Otro.Ajust1 + content.R65["5310"].IntDIANSegSoc.Ajust1;

    /**
     * Valor contable perdidas ppor inversiones en subsidiarias, asociadas y negocios conjuntos
     */

    renLiq.Gastos.PredidasPorInversionesSubsidiariasAsociadasNegocios.PerdidaMetodoParticipacion.ValorContable = content.R66["5313"].PerMetPart.SaldCont;
    renLiq.Gastos.PredidasPorInversionesSubsidiariasAsociadasNegocios.PerdidaMetodoValorRazonable.ValorContable = content.R66["5313"].PerMedValRaz.SaldCont;

    /**
     * Valor contable perdidas por mediciones a valor razonable
     */

    renLiq.Gastos.PerdidasPorMedicionesValorRazonable.ActivosBiologicos.ValorContable = content.R66["5314"].ActBio.SaldCont;
    renLiq.Gastos.PerdidasPorMedicionesValorRazonable.PropiedadesInversion.ValorContable = content.R66["5314"].PrpInv.SaldCont;
    renLiq.Gastos.PerdidasPorMedicionesValorRazonable.InstrumentosFinancieros.ValorContable = content.R66["5314"].InsFin.SaldCont;
    renLiq.Gastos.PerdidasPorMedicionesValorRazonable.InstrumentosDerivados.ValorContable = content.R66["5314"].InsDer.SaldCont;
    renLiq.Gastos.PerdidasPorMedicionesValorRazonable.Otros.ValorContable = content.R66["5314"].Otros.SaldCont;

    /**
     * Valor contable perdidas en la venta o enajenacion de activos fijos
     */

  }catch(e){
    console.log(e);
  }
}