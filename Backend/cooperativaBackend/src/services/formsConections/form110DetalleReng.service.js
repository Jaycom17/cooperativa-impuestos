import prisma from '../../config/prisma.js';

export const getForm110DetalleReng = async (form110, student) => {
    try {

        const res = await prisma.report.findFirst({
            where: {
                stuID: student.stuID,
                roomID: student.roomID,
            },
            select: {
                detID: true,
            },
        });

        const detReng = await prisma.formdetallerenglones.findUnique({
            where: {
                detID: res.detID,
            }
        });

        if (!detReng) {
            return { message: 'Formulario no encontrado' };
        }

        const content = detReng.detContent;

        form110.DatosResum.DatosInf.TotalCostGastNom = (content.R33.TotFisc || 0);
        form110.DatosResum.DatosInf.AportSistSegSocial = (content.R34.TotFisc || 0);
        form110.DatosResum.DatosInf.AportSenaEtc = (content.R35.TotFisc || 0);

        form110.DatosResum.Patrim.EfectvEquiEfect = (content.R36.TotFisc || 0);
        form110.DatosResum.Patrim.InvInstFinDeriv = (content.R37.TotFisc || 0);
        form110.DatosResum.Patrim.CuentDocArreFinCob = (content.R38.TotFisc || 0);
        form110.DatosResum.Patrim.Inv = (content.R39.TotFisc || 0);
        form110.DatosResum.Patrim.ActivInt = (content.R40.TotFisc || 0);
        form110.DatosResum.Patrim.ActivBio = (content.R41.TotFisc || 0);
        form110.DatosResum.Patrim.PPEPANCMC = (content.R42.TotFisc || 0);
        form110.DatosResum.Patrim.Otro = (content.R43.TotFisc || 0);
        form110.DatosResum.Patrim.Pasiv = (content.R45.TotFisc || 0);

        form110.DatosResum.Ingre.Bruto = (content.R47.TotFisc || 0);
        form110.DatosResum.Ingre.Finan = (content.R48.TotFisc || 0);
        form110.DatosResum.Ingre.DividNoCont = (content.R49.TotFisc || 0);
        form110.DatosResum.Ingre.DividGravNat06 = (content.R52.TotFisc || 0);
        form110.DatosResum.Ingre.DividGravNat07 = (content.R53.TotFisc || 0);
        form110.DatosResum.Ingre.DiviDNoGrav07 = (content.R54.TotFisc || 0);
        form110.DatosResum.Ingre.DividGravMega07 = (content.R56.TotFisc || 0);
        form110.DatosResum.Ingre.Otro = (content.R57.TotFisc || 0);
        form110.DatosResum.Ingre.DevRebDec = (content.R59.TotFisc || 0);
        form110.DatosResum.Ingre.IngNoRent = (content.R60.TotFisc || 0);

        form110.DatosResum.CostDedic.Cost = (content.R62.TotFisc || 0);
        form110.DatosResum.CostDedic.GastAdmin = (content.R63.TotFisc || 0);
        form110.DatosResum.CostDedic.GastDistVent = (content.R64.TotFisc || 0);
        form110.DatosResum.CostDedic.GastFinan = (content.R65.TotFisc || 0);
        form110.DatosResum.CostDedic.Otro = (content.R66.TotFisc || 0);

        form110.DatosResum.Renta.RecuDedu = (content.R70.TotFisc || 0);
        form110.DatosResum.Renta.Compensacion = (content.R74.TotFisc || 0);
        form110.DatosResum.Renta.RentPresun = (content.R76.ValFisc || 0);
        form110.DatosResum.Renta.RentExenta = (content.R77.TotFisc || 0);
        form110.DatosResum.Renta.RenGravable = (content.R78.TotFisc || 0);

        form110.DatosResum.GananciasOcasion.IngreGananOcasion = (content.R80.TotFisc || 0);
        form110.DatosResum.GananciasOcasion.RentDeudReg = (content.R81.TotFisc || 0);
        form110.DatosResum.GananciasOcasion.UtiliPerdFisc = (content.R82.TotFisc || 0);
        form110.DatosResum.GananciasOcasion.CostGananOcas = (content.R83.TotFisc || 0);
        form110.DatosResum.GananciasOcasion.GananOcasionNoAgrav = (content.R84.TotFisc || 0);
        form110.DatosResum.GananciasOcasion.GananOcasGrav = (content.R85.TotFisc || 0);

        form110.DatosResum.LiquiPriv.ImpuesRentLiquiGrav.RentLiquidGrav = (content.R75.TotFisc || 0);
        form110.DatosResum.LiquiPriv.ImpuesRentLiquiGrav.DivPartGravET00 = (content.R87.TotFisc || 0);
        form110.DatosResum.LiquiPriv.ImpuesRentLiquiGrav.DivPartGrav27 = (content.R89.TotFisc || 0);
        form110.DatosResum.LiquiPriv.ImpuesRentLiquiGrav.DivPartGrav = (content.R90.TotFisc || 0);
        form110.DatosResum.LiquiPriv.ImpuesRentLiquiGrav.DivPartGrav33 = (content.R91.TotFisc || 0);

        form110.DatosResum.LiquiPriv.DescTrib = (content.R93.TotFisc || 0);
        form110.DatosResum.LiquiPriv.ImpGanOcas = (content.R95.TotFisc || 0);
        form110.DatosResum.LiquiPriv.AnticRentLiquidAnnoAntGrav = (content.R101.ValFisc || 0);
        form110.DatosResum.LiquiPriv.SaldFavAnnoAntGrav = (content.R102.ValFisc || 0);

        form110.DatosResum.LiquiPriv.Reten.OtraReten = (content.R104.TotFisc || 0);

        form110.DatosResum.LiquiPriv.AntRenAnnoGravSig = (content.R106.ValFisc || 0);

        form110.DatosResum.LiquiPriv.Sansion = (content.R111.TotFisc || 0);

    } catch (e) {
        console.log(e);
    }
}