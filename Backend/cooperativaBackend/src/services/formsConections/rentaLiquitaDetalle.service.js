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

    renLiq.Costos.MateriasPrimasReventaBienes.CostossVentasCalculadoSistemaPermanente.MenorValorFiscal = content.R62["61"].CostVenSisPer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniMatPri.Data.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.ComprasLocales.MenorValorFiscal = content.R62["61"].InvIniMatPri.CompLoc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.Importaciones.MenorValorFiscal = content.R62["61"].InvIniMatPri.Imp.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioFinal.MenorValorFiscal = content.R62["61"].InvIniMatPri.InvFinMatPri.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioInicial.MenorValorFiscal = content.R62["61"].CostVentInv.InvIni.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.ComprasLocales.MenorValorFiscal = content.R62["61"].CostVentInv.CompLoc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.Importaciones.MenorValorFiscal = content.R62["61"].CostVentInv.Import.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioFinal.MenorValorFiscal = content.R62["61"].CostVentInv.InvFin.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniTrbProc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioFinal.MenorValorFiscal = content.R62["61"].AsisTec.InvFinTrbProc.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioInicial.MenorValorFiscal = content.R62["61"].InvIniProdTer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioFinal.MenorValorFiscal = content.R62["61"].AsisTec.InvFinProdTer.Ajust1;
    renLiq.Costos.MateriasPrimasReventaBienes.CostosPrestacionServicios.MenorValorFiscal = content.R62["6140"].CostActRenExt.Ajust1;

    /**
     * Mayor valor fiscal costos dematerias primas
     */

    renLiq.Costos.MateriasPrimasReventaBienes.CostossVentasCalculadoSistemaPermanente.MayorValorFiscal = content.R62["61"].CostVenSisPer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniMatPri.Data.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.ComprasLocales.MayorValorFiscal = content.R62["61"].InvIniMatPri.CompLoc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.Importaciones.MayorValorFiscal = content.R62["61"].InvIniMatPri.Imp.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.MateriasPrimasProduccion.InventarioFinal.MayorValorFiscal = content.R62["61"].InvIniMatPri.InvFinMatPri.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioInicial.MayorValorFiscal = content.R62["61"].CostVentInv.InvIni.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.ComprasLocales.MayorValorFiscal = content.R62["61"].CostVentInv.CompLoc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.Importaciones.MayorValorFiscal = content.R62["61"].CostVentInv.Import.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostoBienesVendidos.InventarioFinal.MayorValorFiscal = content.R62["61"].CostVentInv.InvFin.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniTrbProc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosProceso.InventarioFinal.MayorValorFiscal = content.R62["61"].AsisTec.InvFinTrbProc.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioInicial.MayorValorFiscal = content.R62["61"].InvIniProdTer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.ProductosTerminados.InventarioFinal.MayorValorFiscal = content.R62["61"].AsisTec.InvFinProdTer.Ajust3;
    renLiq.Costos.MateriasPrimasReventaBienes.CostosPrestacionServicios.MayorValorFiscal = content.R62["6140"].CostActRenExt.Ajust3;


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

    renLiq.Costos.ManoObra.CortoPlazo.MenorValorFiscal = content.R62["61"].CostManoObr.CortoPlz.Ajust1;
    renLiq.Costos.ManoObra.LargoPlazo.MenorValorFiscal = content.R62["61"].CostManoObr.LargoPlz.Ajust1;
    renLiq.Costos.ManoObra.PostTerminacionVinculoLaboral.MenorValorFiscal = content.R62["61"].CostManoObr.TermVincLab.Ajust1;
    renLiq.Costos.ManoObra.PostEmpleo.MenorValorFiscal = content.R62["61"].CostManoObr.PostEmpl.Ajust1;

    /**
     * Mayor valor fiscal mano de obra
     */

    renLiq.Costos.ManoObra.CortoPlazo.MayorValorFiscal = content.R62["61"].CostManoObr.CortoPlz.Ajust3;
    renLiq.Costos.ManoObra.LargoPlazo.MayorValorFiscal = content.R62["61"].CostManoObr.LargoPlz.Ajust3;
    renLiq.Costos.ManoObra.PostTerminacionVinculoLaboral.MayorValorFiscal = content.R62["61"].CostManoObr.TermVincLab.Ajust3;
    renLiq.Costos.ManoObra.PostEmpleo.MayorValorFiscal = content.R62["61"].CostManoObr.PostEmpl.Ajust3;

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

    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.AjusteAcumunlado.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.AjusAcum.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.AjusteAcumunlado.MenorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.AjusAcum.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DeprActBio.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.AjusteAcumunlado.MenorValorFiscal = content.R62["61"].CostDepr.DeprActBio.AjusAcum.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MenorValorFiscal = content.R62["61"].CostDepr.DepreActInt.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.AjusteAcumunlado.MenorValorFiscal = content.R62["61"].CostDepr.DepreActInt.AjusAcum.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.Costo.MenorValorFiscal = content.R62["61"].CostDepr.Otro.Cost.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.AjusteAcumunlado.MenorValorFiscal = content.R62["61"].CostDepr.Otro.AjusAcum.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.MenorValorFiscal = content.R62["61"].Deterioros.Inv.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.MenorValorFiscal = content.R62["61"].Deterioros.PrpPltEqu.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.MenorValorFiscal = content.R62["61"].Deterioros.ActInt.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.MenorValorFiscal = content.R62["61"].Deterioros.ActExp.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.MenorValorFiscal = content.R62["61"].Deterioros.PrpInver.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MenorValorFiscal = content.R62["61"].Deterioros.ActNoCorr.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.MenorValorFiscal = content.R62["61"].Deterioros.ActBio.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.MenorValorFiscal = content.R62["61"].Deterioros.BienArt.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.MenorValorFiscal = content.R62["61"].Deterioros.ActFin.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MenorValorFiscal = content.R62["61"].Deterioros.CartCred.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.MenorValorFiscal = content.R62["61"].Deterioros.OtrasInv.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.MenorValorFiscal = content.R62["61"].Deterioros.DerUso.Ajust1;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MenorValorFiscal = content.R62["61"].Deterioros.Otros.Ajust1;

    /**
     * Mayor valor fiscal depreciaciones amortizaciones y deterioro
     */

    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesPlantaEquipo.AjusteAcumunlado.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpPltEqu.AjusAcum.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionPropiedadesInversion.AjusteAcumunlado.MayorValorFiscal = content.R62["61"].CostDepr.DeprPrpInv.AjusAcum.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DeprActBio.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DepreciacionActivosBiologicos.AjusteAcumunlado.MayorValorFiscal = content.R62["61"].CostDepr.DeprActBio.AjusAcum.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.Costo.MayorValorFiscal = content.R62["61"].CostDepr.DepreActInt.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.AmortizacionActivosIntangibles.AjusteAcumunlado.MayorValorFiscal = content.R62["61"].CostDepr.DepreActInt.AjusAcum.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.Costo.MayorValorFiscal = content.R62["61"].CostDepr.Otro.Cost.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.OtrasDepreciacionesAmortizaciones.AjusteAcumunlado.MayorValorFiscal = content.R62["61"].CostDepr.Otro.AjusAcum.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.Inventarios.MayorValorFiscal = content.R62["61"].Deterioros.Inv.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesPlantaEquipo.MayorValorFiscal = content.R62["61"].Deterioros.PrpPltEqu.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosIntangibles.MayorValorFiscal = content.R62["61"].Deterioros.ActInt.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosExploracionEvaluacionRecursosMinerales.MayorValorFiscal = content.R62["61"].Deterioros.ActExp.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.PropiedadesInversionMedidasCosto.MayorValorFiscal = content.R62["61"].Deterioros.PrpInver.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosNoCorrientesMantenidosVentaEntregarPropietarios.MayorValorFiscal = content.R62["61"].Deterioros.ActNoCorr.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosBiologicosMedidosCosto.MayorValorFiscal = content.R62["61"].Deterioros.ActBio.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.BienesArteCultura.MayorValorFiscal = content.R62["61"].Deterioros.BienArt.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.ActivosFinancieros.MayorValorFiscal = content.R62["61"].Deterioros.ActFin.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.CarteraCreditoOperacionesLeasing.MayorValorFiscal = content.R62["61"].Deterioros.CartCred.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrasInversionesMedidasCostoMetodoParticipacion.MayorValorFiscal = content.R62["61"].Deterioros.OtrasInv.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.DerechosUsoArrendamientosOperativos.MayorValorFiscal = content.R62["61"].Deterioros.DerUso.Ajust3;
    renLiq.Costos.DepresionacionesAmortizacionesDeterioros.DeterioroValorActivos.OtrosDeterioros.MayorValorFiscal = content.R62["61"].Deterioros.Otros.Ajust3;

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

    renLiq.Costos.OtrosCostos.Arrendamientos.MenorValorFiscal = content.R62["61"].Otros.Arren.Ajust1;
    renLiq.Costos.OtrosCostos.Seguros.MenorValorFiscal = content.R62["61"].Otros.Seguro.Ajust1;
    renLiq.Costos.OtrosCostos.Servicios.MenorValorFiscal = content.R62["61"].Otros.Serv.Ajust1;
    renLiq.Costos.OtrosCostos.Honorarios.MenorValorFiscal = content.R62["61"].Otros.Honor.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MenorValorFiscal = content.R62["61"].ServTecn.VinEco.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R62["61"].ServTecn.JurisNoCoop.Ajust1;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MenorValorFiscal = content.R62["61"].ServTecn.NoVin.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MenorValorFiscal = content.R62["61"].AsisTec.VinEco.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MenorValorFiscal = content.R62["61"].AsisTec.JurisNoCoop.Ajust1;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MenorValorFiscal = content.R62["61"].AsisTec.NoVin.Ajust1;
    renLiq.Costos.OtrosCostos.OtrosConceptosReconocidosCostos.MenorValorFiscal = content.R62["61"].AsisTec.Otros.Ajust1;

    /**
     * Mayor valor fiscal otros costos
     */

    renLiq.Costos.OtrosCostos.Arrendamientos.MayorValorFiscal = content.R62["61"].Otros.Arren.Ajust3;
    renLiq.Costos.OtrosCostos.Seguros.MayorValorFiscal = content.R62["61"].Otros.Seguro.Ajust3;
    renLiq.Costos.OtrosCostos.Servicios.MayorValorFiscal = content.R62["61"].Otros.Serv.Ajust3;
    renLiq.Costos.OtrosCostos.Honorarios.MayorValorFiscal = content.R62["61"].Otros.Honor.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.VinculadosEconomicos.MayorValorFiscal = content.R62["61"].ServTecn.VinEco.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R62["61"].ServTecn.JurisNoCoop.Ajust3;
    renLiq.Costos.OtrosCostos.ServiciosTecnicos.NoVinculados.MayorValorFiscal = content.R62["61"].ServTecn.NoVin.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.VinculadosEconomicos.MayorValorFiscal = content.R62["61"].AsisTec.VinEco.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.JurisdiccionesNoCooperantesBajaNulaImposicion.MayorValorFiscal = content.R62["61"].AsisTec.JurisNoCoop.Ajust3;
    renLiq.Costos.OtrosCostos.AsistenciaTecnica.NoVinculados.MayorValorFiscal = content.R62["61"].AsisTec.NoVin.Ajust3;
    renLiq.Costos.OtrosCostos.OtrosConceptosReconocidosCostos.MayorValorFiscal = content.R62["61"].AsisTec.Otros.Ajust3;
    renLiq.Costos.OtrosCostos.OtrosConceptosFiscalesNoReconocidos.MayorValorFiscal = content.R62["6140"].CostFiscActFij.Ajust3;

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

    renLiq.Gastos.Administracion.ManoObra.CortoPlazo.MenorValorFiscal = content.R63["5105"].SalOtro.Ajust1 + content.R63["5105"].AporEPS.Ajust1 + content.R63["5105"].AporARL.Ajust1 + content.R63["5105"].AporFondPen.Ajust1 + content.R63["5105"].AporSENA.Ajust1 + content.R63["5105"].AporICBF.DeprePrpPltEqui.Cost.Ajust1 + content.R63["5105"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust1;

    /**
     * Mayor valor fiscal gastos de administracion, mano de obra
     */

    renLiq.Gastos.Administracion.ManoObra.CortoPlazo.MayorValorFiscal = content.R63["5105"].SalOtro.Ajust3 + content.R63["5105"].AporEPS.Ajust3 + content.R63["5105"].AporARL.Ajust3 + content.R63["5105"].AporFondPen.Ajust3 + content.R63["5105"].AporSENA.Ajust3 + content.R63["5105"].AporICBF.DeprePrpPltEqui.Cost.Ajust3 + content.R63["5105"].AporICBF.DeprePrpPltEqui.AporCajaComp.Ajust3;

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

  }catch(e){
    console.log(e);
  }
}